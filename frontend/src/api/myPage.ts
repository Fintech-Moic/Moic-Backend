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
      title: '수정에 성공하였습니다.',
      text: '그렇습니다.',
    });
  }
  return result;
};

export const checkPassword = async (data: string) => {
  const result = fetchPost({ url: '/user/check/password', data, isAuth: true });
  return result;
};

export const updatePassword = async (data: FieldValues) => {
  const result = fetchPost({
    url: '/user/modify/password',
    data,
    isAuth: true,
  });
  return result;
};

export const WithdrawalApi = async () => {
  const result = fetchPost({ url: '/user/delete', isAuth: true });
  return result;
};
