'use client';

import { useAtomValue } from 'jotai';
import PaginatedCardList from '../organisms/PaginatedCardList';
import ProfitFilter from '../organisms/ProfitFilter';
import { filterSwitchOpenAtom } from '../../../store/atoms/header';
import MyCardContainer from '../organisms/MyCardContainer';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default function Page() {
  const filterSwitchOpen = useAtomValue(filterSwitchOpenAtom);
  return (
    <>
      <Header
        title={`${filterSwitchOpen ? '전체 카드 조회' : '내 카드 조회'}`}
        isFilterButton
        isPrevButton
      />
      <div className="relative flex-1 overflow-y-auto w-full h-full flex justify-center items-center flex-col">
        <ProfitFilter />
        {filterSwitchOpen ? (
          <PaginatedCardList listType="read" />
        ) : (
          <MyCardContainer />
        )}
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
