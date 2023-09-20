'use client';

import { useAtomValue } from 'jotai';
import ProfitFilter from '../organisms/ProfitFilter';
import { filterOpenAtom } from '@/store/atoms/header';

export default function Page() {
  const filterOpen = useAtomValue(filterOpenAtom);
  return (
    <div className="w-full h-full relative">
      {filterOpen && <ProfitFilter />}
    </div>
  );
}
