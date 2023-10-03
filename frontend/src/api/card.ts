import { fetchGet, fetchPost } from '@/util/api';

export const getAllCard = async () =>
  fetchGet({ url: `/card/all?userId="test1234"`, isAuth: true });

interface GetCardSearchProps {
  company?: string;
  type?: string;
  cardName?: string;
}

export const getCardSearch = async ({
  company,
  type,
  cardName,
}: GetCardSearchProps) =>
  fetchGet({
    url: `/card/search?userId=test1234&company=${company}&type=${type}&cardName=${cardName}`,
    isAuth: true,
  });

export const getCardDetail = async (cardName: string) =>
  fetchGet({
    url: `/card/detail?cardName=${cardName}&userId=test1234`,
    isAuth: true,
  });

export const postCardRegist = async (cardName: string) =>
  fetchPost({
    url: '/card/regist',
    data: { cardName, userId: 'test1234' },
    isAuth: true,
  });

export const getMyCard = async () =>
  fetchGet({ url: '/card/mycards?userId=test1234', isAuth: true });

export const postCardDelete = async (cardName: string) =>
  fetchPost({
    url: '/card/delete',
    data: { cardName, userId: 'test1234' },
    isAuth: true,
  });
