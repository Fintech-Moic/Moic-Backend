'use client';

import { useState } from 'react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import CardList from '../molecules/CardList';
import { Card } from '../../../types/card';
import Pagination from '@/components/molecules/Pagination';
import { filterOptionAtom } from '@/store/atoms/header';
import { getCardSearch } from '@/api/card';
import useCustomQuery from '@/hooks/useCustomQuery';

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
  const router = useRouter();
  const { data, isLoading } = useCustomQuery(
    {
      queryKey: ['getCardSearch', { ...filterOption }],
      queryFn: () => getCardSearch({ ...filterOption }),
      staleTime: 1000 * 60 * 100,
      refetchOnWindowFocus: false,
    },
    router
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center h-full pb-6 justify-between gap-8 pt-14">
        <div className="flex flex-col gap-14 justify-center items-start">
          <div className="flex flex-row align-center gap-4 justify-center">
            <div className="w-[140px] h-[88px] rounded-lg bg-Skeleton" />
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="w-[34px] h-[26px] bg-Skeleton rounded-lg" />
              <div className="w-24 h-5 bg-Skeleton rounded-lg" />
            </div>
          </div>
          <div className="flex flex-row align-center gap-4 justify-center">
            <div className="w-[140px] h-[88px] rounded-lg bg-Skeleton" />
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="w-[34px] h-[26px] bg-Skeleton rounded-lg" />
              <div className="w-24 h-5 bg-Skeleton rounded-lg" />
            </div>
          </div>
          <div className="flex flex-row align-center gap-4 justify-center">
            <div className="w-[140px] h-[88px] rounded-lg bg-Skeleton" />
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="w-[34px] h-[26px] bg-Skeleton rounded-lg" />
              <div className="w-24 h-5 bg-Skeleton rounded-lg" />
            </div>
          </div>
          <div className="flex flex-row align-center gap-4 justify-center">
            <div className="w-[140px] h-[88px] rounded-lg bg-Skeleton" />
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="w-[34px] h-[26px] bg-Skeleton rounded-lg" />
              <div className="w-24 h-5 bg-Skeleton rounded-lg" />
            </div>
          </div>
        </div>
        <div className="w-56 h-[34px] bg-Skeleton rounded-lg" />
      </div>
    );
  }
  const totalPageLength = Math.ceil(
    (getfilteredCardList(listType, data.data.cardList) as Array<Card>).length /
      4
  );

  return (
    <div className="flex flex-col items-center h-full pb-6 justify-between gap-8 pt-14">
      {totalPageLength === 0 ? (
        <div className="h3b text-black opacity-50 h-full flex items-center flex-col justify-center break-words">
          {listType === 'read' ? (
            <>
              <span>검색된 카드가 없어요!</span>
              <span>다른 검색어를 입력해볼까요?</span>
            </>
          ) : (
            <>
              <span>추가할 카드가 없어요!</span>
              <span>모든 카드를 다 가지고 계시군요!</span>
            </>
          )}
        </div>
      ) : (
        <>
          <CardList
            list={getfilteredCardList(listType, data.data.cardList)}
            currentPage={idx + 1}
            listType={listType}
          />
          <Pagination idx={idx} setIdx={setIdx} pageLength={totalPageLength} />
        </>
      )}
    </div>
  );
}
