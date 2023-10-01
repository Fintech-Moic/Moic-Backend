interface AuthFetchProps {
  url: string;
  data?: any;
}
export async function authFetchGet({ url }: AuthFetchProps) {
  const response = await fetch(`https://moic.site/api/v1${url}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem('access_token') as string,
    },
    credentials: 'include',
  });

  const result = await response.json();
  return result;
}

export async function authFetchPost({ url, data }: AuthFetchProps) {
  const response = await fetch(`https://moic.site/api/v1${url}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: localStorage.getItem('access_token') as string,
    },
    body: JSON.stringify(data),
    credentials: 'include',
  });

  const result = await response.json();
  return result;
}
