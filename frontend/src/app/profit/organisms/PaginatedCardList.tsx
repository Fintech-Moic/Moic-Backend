'use client';

import { useState, useEffect } from 'react';
import { useAtomValue } from 'jotai';
import CardList from '../molecules/CardList';
import Pagination from '@/components/molecules/Pagination';
import { filterOptionAtom } from '@/store/atoms/header';
import { getCardSearch } from '@/api/card';

/** 페이지네이션과 카드 리스트가 융합된 컴포넌트
 * @param {Array} data CardList를 렌더링하기 위한 서치 데이터의 배열
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function PaginatedCardList({ data }: any) {
  const [idx, setIdx] = useState(0);
  const filterOption = useAtomValue(filterOptionAtom);
  const [searchData, setSearchData] = useState(data);

  useEffect(() => {
    (async () => {
      const response = await getCardSearch({
        company: filterOption.company,
        type: filterOption.type,
        cardName: filterOption.cardName,
      });
      setSearchData(response.data.cardList);
    })();
  }, [filterOption]);

  return (
    <div className="flex flex-col items-center h-full pb-6 justify-between gap-8 pt-14">
      <CardList list={searchData} currentPage={idx + 1} />
      <Pagination
        idx={idx}
        setIdx={setIdx}
        pageLength={Math.round(
          (
            searchData as Array<{
              cardImage: string;
              company: string;
              mine: boolean;
              name: string;
              type: string;
            }>
          ).length / 4
        )}
      />
    </div>
  );
}
