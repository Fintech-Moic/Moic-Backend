'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import Switch from '../atoms/Switch';
import SearchInputBar from '../molecules/SearchInputBar';
import Dropdown from '@/components/atoms/Dropdown';
import { filterOpenAtom, filterOptionAtom } from '@/store/atoms/header';
import { getAllCard } from '@/api/card';

/** 헤더의 우측 클릭시, 렌더링되는 필터 컴포넌트
 * @returns {JSX.Element} 컴포넌트 반환
 */
// const searchOption = await getAllCard();
export default function ProfitFilter() {
  const { data } = useQuery({
    queryKey: ['getAllCard'],
    queryFn: () => getAllCard(),
    staleTime: 1000 * 60 * 100,
    refetchOnWindowFocus: false,
  });
  const filterOpen = useAtomValue(filterOpenAtom);
  const setFilterOption = useSetAtom(filterOptionAtom);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<{
    id: string;
    value: string;
  } | null>(null);
  const [selectedType, setSelectedType] = useState<{
    id: string;
    value: string;
  } | null>(null);
  useEffect(() => {
    setFilterOption((prev: any) => {
      const updatedFilter = { ...prev };
      updatedFilter.company = selectedCompany?.value || '';
      updatedFilter.type = selectedType?.value || '';
      return updatedFilter;
    });
  }, [selectedCompany, selectedType, setFilterOption]);

  const companyList = useMemo(
    () =>
      data && 'companyList' in data
        ? data?.companyList.map((cur: string, idx: number) => {
            return { id: `${idx}_cur`, value: cur };
          })
        : [],
    [data]
  );

  const typeList = useMemo(
    () =>
      data && 'typeList' in data
        ? data?.typeList.map((cur: string, idx: number) => {
            return { id: `${idx}_cur`, value: cur };
          })
        : [],
    [data]
  );

  const handleSubmitSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const currentInput = (e.currentTarget as HTMLFormElement).search.value;

      if (!currentInput) return;

      setFilterOption((prev: any) => {
        const updatedFilter = { ...prev };
        updatedFilter.cardName = currentInput;
        return updatedFilter;
      });
    },
    [setFilterOption]
  );

  return (
    filterOpen && (
      <div className="z-999 top-2 mt-4 p-4 absolute left-1/2 w-[360px] -translate-x-1/2 rounded-[10px] bg-Secondary flex flex-col justify-between gap-4">
        <div className="flex justify-start items-center gap-1">
          <span className="p2r">전체 보기</span>
          <Switch isOn={isSwitchOn} setIsOn={setIsSwitchOn} />
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
