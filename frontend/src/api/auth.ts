import { FieldValues } from 'react-hook-form';

const SERVER_URL = 'https://moic.site/api/v1';

const signInApi = async (formData: FieldValues) => {
  await fetch(`${SERVER_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('access_token', data.data.accessToken);
    })
    .catch((error: Error) => {
      console.log(error);
    });
};

const signUpApi = async (formData: FieldValues) => {
  try {
    const response = await fetch(`${SERVER_URL}/user/regist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.error(`HTTP Error: ${response.status}`);
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

const signOutApi = async () => {
  if (localStorage.getItem('access_token') != null) {
    try {
      const response = await fetch(`${SERVER_URL}/user/logout`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('access_token') as string,
        },
        credentials: 'include',
      });
      console.log(response);
      if (!response.ok) {
        console.error(`HTTP Error: ${response.status}`);
        return null;
      }
      localStorage.clear();
      sessionStorage.clear();
      return 'SUCCESS';
    } catch (error: any) {
      console.error(error);
      return null;
    }
  } else {
    return '로그인 정보가 존재하지 않습니다';
  }
};
export { signInApi, signUpApi, signOutApi };
