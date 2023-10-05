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

export async function fetchPost(props: FetchProps) {
  const { url, data, isAuth, ContentType = 'application/json' } = props;

  const headers: Record<string, string> = {
    'Content-type': ContentType,
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
    body: JSON.stringify(data),
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
        if (refreshingRes.statusText !== 200 || refreshingRes.errorCode)
          return refreshingRes;
        localStorage.setItem('access_token', refreshingRes.data.token);
        const reResponse: any = await fetchPost({
          ...props,
        });

        return reResponse;
      }
      case 'SE003': {
        const signOutResult: any = await fetchPost({
          url: '/user/logout',
          isAuth: true,
        });
        return signOutResult;
      }
      default:
        return result;
    }
  } catch (e) {
    return e;
  }
}

export async function fetchGet(props: FetchProps) {
  const { url, isAuth, ContentType = 'application/json' } = props;
  const headers: Record<string, string> = {
    'Content-type': ContentType,
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
        if (refreshingRes.statusText !== 200 || refreshingRes.errorCode)
          return refreshingRes;
        localStorage.setItem('access_token', refreshingRes.data.token);

        const reResponse: any = await fetchPost({
          ...props,
        });

        return reResponse;
      }
      case 'SE003': {
        const signOutResult: any = await fetchPost({
          url: '/user/logout',
          isAuth: true,
        });
        return signOutResult;
      }
      default:
        return result;
    }
  } catch (e) {
    return e;
  }
}
