'use client';

import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import CardList from '../molecules/CardList';
import Pagination from '@/components/molecules/Pagination';
import { filterOptionAtom } from '@/store/atoms/header';
import { getCardSearch } from '@/api/card';

interface Card {
  id: string;
  company: string;
  type: string;
  name: string;
  cardImage: string;
  mine: boolean;
}
/** 페이지네이션과 카드 리스트가 융합된 컴포넌트
 * @param {Array} data CardList를 렌더링하기 위한 서치 데이터의 배열
 * @returns {JSX.Element} 컴포넌트 반환
 */
function getfilteredCardList(
  listType: string,
  cardList: Array<Card>
): Array<Card> {
  if (listType === 'read' || !cardList) return cardList;
  return cardList.filter((cur: Card) => !cur.mine);
}
export default function PaginatedCardList({ listType }: { listType: string }) {
  const [idx, setIdx] = useState(0);
  const filterOption = useAtomValue(filterOptionAtom);

  const { data, isLoading } = useQuery<any>({
    queryKey: ['getCardSearch', { ...filterOption }],
    queryFn: () => getCardSearch({ ...filterOption }),
    staleTime: 1000 * 60 * 100,
    refetchOnWindowFocus: false,
  });
  // Fix me! : Suspense 추가 및 적당한 스켈레톤 디자인으로 변경 필요
  if (isLoading) return <div>로딩중...</div>;

  return (
    <div className="flex flex-col items-center h-full pb-6 justify-between gap-8 pt-14">
      <CardList
        list={getfilteredCardList(listType, data.data.cardList)}
        currentPage={idx + 1}
        listType={listType}
      />
      <Pagination
        idx={idx}
        setIdx={setIdx}
        pageLength={Math.round(
          (getfilteredCardList(listType, data.data.cardList) as Array<Card>)
            .length / 4
        )}
      />
    </div>
  );
}
