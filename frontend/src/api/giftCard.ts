import { fetchGet, fetchPost } from '@/util/api';

export const postGiftRegist = async (formData: FormData) =>
  fetchPost({
    url: '/gift/regist',
    data: formData,
    isAuth: true,
    ContentType: 'multipart/form-data',
  });

export const getMyGift = async () =>
  fetchGet({
    url: '/gift/mygifts',
    isAuth: true,
  });

export const postGiftDelete = async (imageUrl: string) =>
  fetchPost({ url: '/gift/delete', isAuth: true, data: { imageUrl } });
