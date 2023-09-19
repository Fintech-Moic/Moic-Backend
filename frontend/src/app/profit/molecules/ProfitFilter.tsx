'use client';

import { useState } from 'react';
import Switch from '../atoms/Switch';
import BlackUpIcon from '@/../public/assets/BlackUpIcon.svg';
import IconButton from '@/components/atoms/IconButton';
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

  return (
    <div className="z-10 mt-4 p-4 absolute left-1/2 h-40 w-[360px] -translate-x-1/2 rounded-[10px] bg-Secondary flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <Switch isOn={isSwitchOn} setIsOn={setIsSwitchOn} />
        <IconButton
          type="button"
          width="w-10"
          height="h-10"
          src={BlackUpIcon}
          alt="필터더보기"
        />
      </div>
      <div className="flex justify-between items-center">
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
      <div className="">검색차아아아ㅏ아아아ㅏㅇ!!!!</div>
    </div>
  );
}
