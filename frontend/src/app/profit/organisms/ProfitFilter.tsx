'use client';

import { useState, useCallback, useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import Switch from '../atoms/Switch';
import SearchInputBar from '../molecules/SearchInputBar';
import Dropdown from '@/components/atoms/Dropdown';
import {
  filterOpenAtom,
  filterOptionAtom,
  filterSwitchOpenAtom,
} from '@/store/atoms/header';
import { getAllCard } from '@/api/card';

/** 헤더의 우측 클릭시, 렌더링되는 필터 컴포넌트
 * @returns {JSX.Element} 컴포넌트 반환
 */

export default function ProfitFilter() {
  const { data, isLoading } = useQuery({
    queryKey: ['getAllCard'],
    queryFn: () => getAllCard(),
    staleTime: 1000 * 60 * 100,
    refetchOnWindowFocus: false,
  });
  const filterOpen = useAtomValue(filterOpenAtom);
  const setFilterOption = useSetAtom(filterOptionAtom);
  const [isSwitchOn, setIsSwitchOn] = useAtom(filterSwitchOpenAtom);
  const [selectedCompany, setSelectedCompany] = useState<{
    id: string;
    value: string;
  } | null>(null);
  const [selectedType, setSelectedType] = useState<{
    id: string;
    value: string;
  } | null>(null);
  useEffect(() => {
    setFilterOption((prev) => {
      const updatedFilter = { ...prev };
      updatedFilter.company =
        selectedCompany?.value === '카드사' ? '' : selectedCompany?.value || '';
      updatedFilter.type =
        selectedType?.value === '카드종류' ? '' : selectedType?.value || '';
      return updatedFilter;
    });
  }, [selectedCompany, selectedType, setFilterOption]);
  const allCardData = data?.data || {};

  const handleSubmitSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formTarget = e.currentTarget as HTMLFormElement;
      if (!formTarget) return;
      const currentInput = formTarget.search.value;
      setFilterOption((prev) => {
        const updatedFilter = { ...prev };
        updatedFilter.cardName = currentInput;
        return updatedFilter;
      });
    },
    [setFilterOption]
  );

  const handleClickSwitch = useCallback(() => {
    setIsSwitchOn((prev) => !prev);
  }, [setIsSwitchOn]);

  if (isLoading) return <div>loading ...</div>;

  const companyList = [{ id: '카드사', value: '카드사' }];
  if (allCardData && 'companyList' in allCardData) {
    allCardData?.companyList.forEach((cur: string, idx: number) => {
      companyList.push({ id: `${idx}_cur`, value: cur });
    });
  }

  const typeList = [{ id: `카드종류`, value: '카드종류' }];
  if (allCardData && 'typeList' in allCardData) {
    allCardData?.typeList.forEach((cur: string, idx: number) => {
      typeList.push({ id: `${idx}_cur`, value: cur });
    });
  }

  return (
    filterOpen && (
      <div className="z-40 top-2 mt-4 p-4 absolute left-1/2 w-[360px] -translate-x-1/2 rounded-[10px] bg-Tertiary flex flex-col justify-between gap-4">
        <div className="flex justify-start items-center gap-1">
          <span className="p2r">전체 보기</span>
          <Switch isOn={isSwitchOn} onClick={handleClickSwitch} />
        </div>
        <div className="flex justify-between items-center relative z-20">
          <Dropdown
            placeholder="카드사"
            list={companyList || []}
            selectItem={selectedCompany}
            setSelectItem={setSelectedCompany}
          />
          <Dropdown
            placeholder="카드 종류"
            list={typeList || []}
            selectItem={selectedType}
            setSelectItem={setSelectedType}
          />
        </div>
        <SearchInputBar onSubmit={handleSubmitSearch} />
      </div>
    )
  );
}
