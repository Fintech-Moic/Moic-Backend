import { authFetchGet, authFetchPost } from '@/util/api';

export const postVocSuggest = async (content: string) =>
  authFetchPost({ url: '/voc', data: { content } });

export const getMyBookmark = async () => authFetchGet({ url: '/gift/mygifts' });
