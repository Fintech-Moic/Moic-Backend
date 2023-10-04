import Swal from 'sweetalert2';
import { FieldValues } from 'react-hook-form';
import { fetchPost } from '@/util/api';

const signInApi = async (data: FieldValues) => {
  const result = await fetchPost({ url: '/user/login', data, isAuth: false });
  if (result.message !== undefined) {
    localStorage.setItem('access_token', result.data.accessToken);
    return result;
  }
  Swal.fire({
    icon: 'error',
    title: '로그인에 실패하였습니다.',
    text: '다시 시도해주세요.',
  });
  return null;
};

const signUpApi = async (data: FieldValues) => {
  const result = await fetchPost({ url: '/user/regist', data, isAuth: false });
  if (result.message !== undefined) {
    return result;
  }
  Swal.fire({
    icon: 'error',
    title: '회원가입에 실패하였습니다.',
    text: '다시 시도해주세요.',
  });
  return null;
};

const signOutApi = async () => {
  if (localStorage.getItem('access_token') != null) {
    const result = await fetchPost({ url: '/user/logout', isAuth: true });
    if (result.message !== undefined) {
      localStorage.clear();
      sessionStorage.clear();
      Swal.fire({
        icon: 'error',
        title: '로그아웃에 성공하였습니다.',
        text: '다음에 만나요!',
      });
      return result;
    }
    Swal.fire({
      icon: 'error',
      title: '로그아웃에 실패하였습니다.',
      text: '다시 시도해주세요.',
    });
  }
  Swal.fire({
    icon: 'error',
    title: '로그인 정보가 존재하지 않습니다',
    text: '다시 시도해주세요.',
  });
  return null;
};

const findIdApi = async (data: FieldValues) => {
  const result = await fetchPost({
    url: '/user/lookup/id',
    data,
    isAuth: false,
  });
  if (result.message !== undefined) {
    return result;
  }
  Swal.fire({
    icon: 'error',
    title: '아이디 찾기에 실패하였습니다.',
    text: '다시 시도해주세요.',
  });
  return null;
};

const sendPasswordApi = async (data: FieldValues) => {
  const result = await fetchPost({
    url: '/user/temp/password',
    data,
    isAuth: false,
  });
  if (result.message !== undefined) {
    return result;
  }
  Swal.fire({
    icon: 'error',
    title: '인증번호 전송에 실패하였습니다.',
    text: '다시 시도해주세요.',
  });
  return null;
};
const checkPasswordApi = async (data: FieldValues) => {
  const result = await fetchPost({
    url: '/user/verify/password',
    data,
    isAuth: false,
  });
  if (result.message !== undefined) {
    return result;
  }
  Swal.fire({
    icon: 'error',
    title: '인증번호 확인에 실패하였습니다.',
    text: '다시 시도해주세요.',
  });
  return null;
};
const changePasswordApi = async (data: FieldValues) => {
  const result = await fetchPost({
    url: '/user/reset/password',
    data,
    isAuth: false,
  });
  if (result.message !== undefined) {
    return result;
  }
  Swal.fire({
    icon: 'error',
    title: '비밀번호 재설정에 실패하였습니다.',
    text: '다시 시도해주세요.',
  });
  return null;
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
