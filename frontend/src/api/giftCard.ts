import { fetchGet, fetchPost } from '../util/api';

function generateBoundary() {
  return `------${Date.now().toString(16)}${Math.random()
    .toString(16)
    .substr(2)}`;
}

export const postGiftRegist = async (formData: any) =>
  fetchPost({
    url: '/gift/regist',
    data: formData,
    isAuth: true,
    ContentType: `multipart/form-data; boundary=${generateBoundary()}`,
  });

export const getMyGift = async () =>
  fetchGet({
    url: '/gift/mygifts',
    isAuth: true,
  });

export const postGiftDelete = async (imageUrl: string) =>
  fetchPost({ url: '/gift/delete', isAuth: true, data: { imageUrl } });
