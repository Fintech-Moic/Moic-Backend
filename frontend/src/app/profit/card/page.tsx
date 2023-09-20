'use client';

import { useAtomValue } from 'jotai';
import { useState } from 'react';
import ProfitFilter from '../organisms/ProfitFilter';
import { filterOpenAtom } from '@/store/atoms/header';
import Pagination from '@/components/molecules/Pagination';

// fix me! : 카드 리스트 렌더링 필요
export default function Page() {
  const filterOpen = useAtomValue(filterOpenAtom);
  const [idx, setIdx] = useState(0);
  return (
    <div className="w-full h-full relative">
      {filterOpen && <ProfitFilter />}
      <div className="" />
      <Pagination idx={idx} setIdx={setIdx} pageLength={10} />
    </div>
  );
}
