const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

interface FetchProps {
  url: string;
  data?: any;
  isAuth: boolean;
  ContentType?: string;
}

interface FetchOptions {
  method: string;
  headers: any;
  body?: string;
  credentials: RequestCredentials | undefined;
}

export async function fetchPost({
  url,
  data,
  isAuth,
  ContentType = 'application/json',
}: FetchProps) {
  const headers: Record<string, string> =
    url === '/gift/regist'
      ? {}
      : {
          'Content-Type': ContentType,
        };

  if (isAuth) {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      headers.Authorization = accessToken;
    }
  }

  const options: FetchOptions = {
    method: 'POST',
    headers,
    body: url === '/gift/regist' ? data : JSON.stringify(data),
    credentials: 'include',
  };

  try {
    const response = await fetch(`${ENDPOINT}${url}`, options);

    const result = await response.json();
    if (!result?.errorCode) return result;

    switch (result.errorCode) {
      case 'SE001': {
        const refreshingRes: any = await fetchPost({
          url: '/auth/refresh',
          isAuth: false,
          data: { accessToken: localStorage.getItem('access_token') as string },
        });
        if (refreshingRes.message !== 'Refresh') return refreshingRes;
        localStorage.setItem('access_token', refreshingRes.data.accessToken);
        const reResponse: any = await fetchPost({
          url,
          data,
          isAuth,
          ContentType,
        });

        return reResponse;
      }
      case 'SE003': {
        localStorage.removeItem('access_token');
        return result;
      }
      default:
        return result;
    }
  } catch (e) {
    return e;
  }
}

export async function fetchGet({
  url,
  isAuth,
  ContentType = 'application/json',
}: FetchProps) {
  const headers: Record<string, string> = {
    'Content-Type': ContentType,
  };

  if (isAuth) {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      headers.Authorization = accessToken;
    }
  }

  try {
    const response = await fetch(`${ENDPOINT}${url}`, {
      method: 'GET',
      headers,
      credentials: 'include',
    });
    const result = await response.json();
    if (!result?.errorCode) return result;

    switch (result.errorCode) {
      case 'SE001': {
        const refreshingRes: any = await fetchPost({
          url: '/auth/refresh',
          isAuth: false,
          data: { accessToken: localStorage.getItem('access_token') as string },
        });
        if (refreshingRes.message !== 'Refresh') return refreshingRes;
        localStorage.setItem('access_token', refreshingRes.data.accessToken);

        const reResponse: any = await fetchPost({
          url,
          isAuth,
          ContentType,
        });

        return reResponse;
      }
      case 'SE002':
      case 'SE003': {
        localStorage.removeItem('access_token');
        return result;
      }
      default:
        return result;
    }
  } catch (e) {
    return e;
  }
}
