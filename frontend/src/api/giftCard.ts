import { fetchGet, fetchPost } from '../util/api';

export const postGiftRegist = async (formData: any) =>
  fetchPost({
    url: '/gift/regist',
    data: formData,
    isAuth: true,
    ContentType: '',
  });

export const getMyGift = async () =>
  fetchGet({
    url: '/gift/mygifts',
    isAuth: true,
  });

export const postGiftDelete = async (imageUrl: string) =>
  fetchPost({ url: '/gift/delete', isAuth: true, data: { imageUrl } });
