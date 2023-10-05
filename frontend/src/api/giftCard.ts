import { fetchGet, fetchPost } from '@/util/api';

export const postGiftRegist = async (formData: FormData) =>
  fetchPost({
    url: '/gift/regist',
    data: formData,
    isAuth: true,
  });

export const getMyGift = async () =>
  fetchGet({
    url: '/gift/mygifts',
    isAuth: true,
    ContentType: '',
  });

export const postGiftDelete = async (imageUrl: string) =>
  fetchPost({ url: '/gift/delete', isAuth: true, data: { imageUrl } });
