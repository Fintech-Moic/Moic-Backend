import Swal from 'sweetalert2';
import { FieldValues } from 'react-hook-form';
import { authFetchGet, authFetchPost } from '@/util/api';

export const postVocSuggest = async (content: string) =>
  authFetchPost({ url: '/voc', data: { content } });

export const getMyBookmark = async () => authFetchGet({ url: '/bkm/lookup' });

export const postBookmarkDelete = async (data: any) =>
  authFetchPost({ url: 'bkm/delete', data });

export const fetchProfile = async () => {
  const result = authFetchPost({ url: '/user/detail' });
  return result;
};

export const updateProfile = async (data: {
  gender: string | null;
  yearOfBirth: string | null;
}) => {
  const result = await authFetchPost({ url: '/user/modify', data });
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
  const result = authFetchPost({ url: '/user/check/password', data });
  return result;
};

export const updatePassword = async (data: FieldValues) => {
  const result = authFetchPost({ url: '/user/modify/password', data });
  return result;
};

export const WithdrawalApi = async () => {
  const result = authFetchPost({ url: '/user/delete' });
  return result;
};
