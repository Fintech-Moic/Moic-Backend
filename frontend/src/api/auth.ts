import Swal from 'sweetalert2';
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
      if (!response.ok) {
        Swal.fire({
          icon: 'error',
          title: '로그아웃에 실패하였습니다.',
          text: '다시 시도해주세요.',
        });
        return null;
      }
      localStorage.clear();
      sessionStorage.clear();
      Swal.fire({
        icon: 'success',
        title: '로그아웃에 성공하였습니다.',
        text: '안녕히 가세요.',
      });
      return 'SUCCESS';
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '로그아웃에 실패하였습니다.',
        text: '다시 시도해주세요.',
      });
      return null;
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: '로그인 정보가 존재하지 않습니다',
      text: '다시 시도해주세요.',
    });
    return null;
  }
};

const findIdApi = async (formData: FieldValues) => {
  try {
    const response = await fetch(`${SERVER_URL}/user/lookup/id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.log('imNotOk');
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const sendPasswordApi = async (formData: FieldValues) => {
  try {
    const response = await fetch(`${SERVER_URL}/user/temp/password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.log('imNotOk');
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const checkPasswordApi = async (formData: FieldValues) => {
  try {
    const response = await fetch(`${SERVER_URL}/user/verify/password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.log('imNotOk');
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const changePasswordApi = async (formData: FieldValues) => {
  try {
    const response = await fetch(`${SERVER_URL}/user/reset/password`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      console.log('imNotOk');
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  signInApi,
  signUpApi,
  signOutApi,
  findIdApi,
  sendPasswordApi,
  checkPasswordApi,
  changePasswordApi,
};
