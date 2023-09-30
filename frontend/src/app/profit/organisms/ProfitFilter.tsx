'use client';

import { useState, useCallback, useEffect } from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import Switch from '../atoms/Switch';
import SearchInputBar from '../molecules/SearchInputBar';
import Dropdown from '@/components/atoms/Dropdown';
import { filterOpenAtom, filterOptionAtom } from '@/store/atoms/header';

interface ProfitFilterProps {
  data: any;
}

/** 헤더의 우측 클릭시, 렌더링되는 필터 컴포넌트
 * @param {Object} data getAllCard 시 반환되는 companyList, typeList를 감싼 Object
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function ProfitFilter({ data }: ProfitFilterProps) {
  const filterOpen = useAtomValue(filterOpenAtom);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const setFilterOption = useSetAtom(filterOptionAtom);
  const [selectedCompany, setSelectedCompany] = useState<{
    id: string;
    value: string;
  } | null>(null);
  const [selectedType, setSelectedType] = useState<{
    id: string;
    value: string;
  } | null>(null);

  // Fix me! : filterOption에 영향가지 않도록 Request 수정하기
  useEffect(() => {
    setFilterOption((prev) => {
      const updatedFilter = { ...prev };
      updatedFilter.company = selectedCompany?.value || '';
      updatedFilter.type = selectedType?.value || '';
      return updatedFilter;
    });
  }, [selectedCompany, selectedType, setFilterOption]);

  const companyList =
    data && 'companyList' in data
      ? data?.companyList.map((cur: string, idx: number) => {
          return { id: `${idx}_cur`, value: cur };
        })
      : [];

  const typeList =
    data && 'typeList' in data
      ? data?.typeList.map((cur: string, idx: number) => {
          return { id: `${idx}_cur`, value: cur };
        })
      : [];

  const handleSubmitSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const currentInput = (e.currentTarget as HTMLFormElement).search.value;
      if (!currentInput) return;
      setFilterOption((prev) => {
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
