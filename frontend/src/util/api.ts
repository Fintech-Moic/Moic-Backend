const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT;

interface FetchProps {
  url: string;
  data?: any;
  isAuth: boolean;
  ContentType?: string;
}

export async function fetchGet({
  url,
  isAuth,
  ContentType = 'application/json',
}: FetchProps) {
  const headers: Record<string, string> = {
    'Content-type': ContentType,
  };

  if (isAuth) {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      headers.Authorization = accessToken;
    }
  }

  const response = await fetch(`${ENDPOINT}${url}`, {
    method: 'GET',
    headers,
    credentials: 'include',
  });

  const result = await response.json();
  return result;
}

export async function fetchPost({
  url,
  data,
  isAuth,
  ContentType = 'application/json',
}: FetchProps) {
  const headers: Record<string, string> = {
    'Content-type': ContentType,
  };

  if (isAuth) {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      headers.Authorization = accessToken;
    }
  }

  const response = await fetch(`${ENDPOINT}${url}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
    credentials: 'include',
  });

  const result = await response.json();
  return result;
}
