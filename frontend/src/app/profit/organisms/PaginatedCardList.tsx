'use client';

import { useState, useEffect } from 'react';
import { useAtomValue } from 'jotai';
import CardList from '../molecules/CardList';
import Pagination from '@/components/molecules/Pagination';
import { filterOptionAtom } from '@/store/atoms/header';
import { getCardSearch } from '@/api/card';

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
