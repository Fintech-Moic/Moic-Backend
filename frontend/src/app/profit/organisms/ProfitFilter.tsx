'use client';

import { useState, useCallback } from 'react';
import Switch from '../atoms/Switch';
import SearchInputBar from '../molecules/SearchInputBar';
import Dropdown from '@/components/molecules/Dropdown';

export default function ProfitFilter() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<{
    id: string;
    value: string;
  } | null>(null);
  const [selectedType, setSelectedType] = useState<{
    id: string;
    value: string;
  } | null>(null);

  // fix me! : server에서 가져온 list로 수정 예정
  const companyList = [
    { id: '1', value: 'KB국민' },
    { id: '2', value: '신한' },
    { id: '3', value: '하나' },
    { id: '4', value: '농협' },
  ];

  const typeList = [
    { id: '1t', value: '체크' },
    { id: '2t', value: '신용' },
  ];

  const handleSubmitSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const currentInput = (e.currentTarget as HTMLFormElement).search.value;
      if (!currentInput) return;
      console.log(currentInput);
    },
    []
  );

  return (
    <div className="z-10 mt-4 p-4 absolute left-1/2 w-[360px] -translate-x-1/2 rounded-[10px] bg-Secondary flex flex-col justify-between gap-4">
      <div className="flex justify-start items-center gap-1">
        <span className="p2r">전체 보기</span>
        <Switch isOn={isSwitchOn} setIsOn={setIsSwitchOn} />
      </div>
      <div className="flex justify-between items-center relative z-20">
        <Dropdown
          placeholder="카드사"
          list={companyList}
          selectItem={selectedCompany}
          setSelectItem={setSelectedCompany}
        />
        <Dropdown
          placeholder="카드 종류"
          list={typeList}
          selectItem={selectedType}
          setSelectItem={setSelectedType}
        />
      </div>
      <SearchInputBar onSubmit={handleSubmitSearch} />
    </div>
  );
}
