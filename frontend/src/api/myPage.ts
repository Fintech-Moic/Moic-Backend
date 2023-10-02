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
  const result = authFetchPost({ url: '/user/modify', data });
  return result;
};
