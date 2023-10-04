'use client';

import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import CardListItem from '../atoms/CardListItem';
import { postCardRegist } from '@/api/card';
import { filterOptionAtom } from '@/store/atoms/header';

interface Card {
  id: string;
  company: string;
  type: string;
  name: string;
  cardImage: string;
  mine: boolean;
}
interface CardListProps {
  list: Array<Card>;
  currentPage: number;
  listType: string;
}
/** 카드 아이템으로 구성된 리스트 컴포넌트
 * @param {Array} list 카드 response의 array
 * @param {Number} currentPage 현재 페이지를 나타내는 정수
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function CardList({
  list,
  listType,
  currentPage,
}: CardListProps) {
  const router = useRouter();
  const filterOption = useAtomValue(filterOptionAtom);
  const mutation = useMutation({
    mutationFn: (cardName: string) => postCardRegist(cardName),
  });
  const queryClient = useQueryClient();

  const handleClickCardItem = async (e: React.MouseEvent<HTMLDivElement>) => {
    const closestCardItem = (e.target as HTMLDivElement).closest('div');
    if (!closestCardItem) return;
    const curCardName = closestCardItem.id as string;
    switch (listType) {
      case 'read':
        router.push(`/profit/card/detail/${curCardName}`);
        break;
      case 'regist':
        mutation.mutate(curCardName, {
          onSuccess() {
            queryClient.setQueryData<any>(
              ['getCardSearch', { ...filterOption }],
              (prevData: any) => ({
                ...prevData,
                data: {
                  cardList: [
                    ...prevData.data.cardList.map((cur: Card) => {
                      if (cur.name === curCardName) {
                        return {
                          ...cur,
                          mine: true,
                        };
                      }
                      return {
                        ...cur,
                      };
                    }),
                  ],
                },
              })
            );
          },
        });
        break;
      default:
        break;
    }
  };
  return (
    <div
      className="flex flex-col gap-14 justify-center items-start"
      onClick={handleClickCardItem}
      aria-hidden="true"
    >
      {list
        .slice((currentPage - 1) * 4, Math.min(currentPage * 4, list.length))
        .map((curItem) => (
          <CardListItem key={curItem.id} listType={listType} {...curItem} />
        ))}
    </div>
  );
}
