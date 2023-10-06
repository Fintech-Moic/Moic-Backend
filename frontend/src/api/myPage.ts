import Swal from 'sweetalert2';
import { FieldValues } from 'react-hook-form';
import { fetchGet, fetchPost } from '@/util/api';

export const postVocSuggest = async (content: string) =>
  fetchPost({ url: '/voc', data: { content }, isAuth: true });

export const getMyBookmark = async () =>
  fetchGet({ url: '/bkm/lookup', isAuth: true });

export const postBookmarkDelete = async (data: any) =>
  fetchPost({ url: '/bkm/delete', data, isAuth: true });

export const fetchProfile = async () => {
  const result = fetchPost({ url: '/user/detail', isAuth: true });
  return result;
};

export const updateProfile = async (data: {
  gender: string | null;
  yearOfBirth: string | null;
}) => {
  const result = await fetchPost({ url: '/user/modify', data, isAuth: true });
  if (result.message !== undefined) {
    Swal.fire({
      icon: 'success',
      title: '회원 정보 수정에 성공하였습니다.',
      text: '그렇습니다.',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: '회원 정보 수정에 실패하였습니다.',
      text: '다시 시도해주세요.',
    });
  }
  return result;
};

export const checkPassword = async (data: FieldValues) => {
  const result = await fetchPost({
    url: '/user/check/password',
    data,
    isAuth: true,
  });
  if (result.message !== undefined) {
    return result;
  }
  Swal.fire({
    icon: 'error',
    title: '잘못된 비밀번호입니다.',
    text: '다시 시도해주세요.',
  });
  return null;
};

export const updatePassword = async (data: FieldValues) => {
  const result = await fetchPost({
    url: '/user/modify/password',
    data,
    isAuth: true,
  });
  if (result.message !== undefined) {
    Swal.fire({
      icon: 'success',
      title: '비밀번호 변경에 성공하였습니다.',
      text: '그렇습니다.',
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: '비밀번호 변경에 실패하였습니다.',
      text: '다시 시도해주세요.',
    });
  }

  return result;
};

export const WithdrawalApi = async () => {
  const result = await fetchPost({ url: '/user/delete', isAuth: true });
  if (result.message !== undefined) {
    Swal.fire({
      icon: 'success',
      title: '탈퇴에 성공하였습니다.',
      text: '다시 돌아와주세요ㅠㅠ',
    });
  }
  Swal.fire({
    icon: 'error',
    title: '탈퇴에 실패하였습니다.',
    text: '다시 시도해주세요.',
  });
  return result;
};
