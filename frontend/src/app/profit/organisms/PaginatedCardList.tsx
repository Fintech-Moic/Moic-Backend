'use client';

import { useState } from 'react';
import CardList from '../molecules/CardList';
import Pagination from '@/components/molecules/Pagination';

export default function PaginatedCardList({ data }: any) {
  const [idx, setIdx] = useState(0);
  return (
    <div className="flex flex-col items-center h-full pb-6 justify-between gap-8 pt-14">
      <CardList list={data.cardList} currentPage={idx + 1} />
      <Pagination
        idx={idx}
        setIdx={setIdx}
        pageLength={Math.round(
          (
            data.cardList as Array<{
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
