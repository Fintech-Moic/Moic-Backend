import { fetchGet, fetchPost } from '@/util/api';

export const postVocSuggest = async (content: string) =>
  fetchPost({ url: '/voc', data: { content }, isAuth: true });

export const getMyBookmark = async () =>
  fetchGet({ url: '/bkm/lookup', isAuth: true });

export const postBookmarkDelete = async (data: any) =>
  fetchPost({ url: '/bkm/delete', data, isAuth: true });
