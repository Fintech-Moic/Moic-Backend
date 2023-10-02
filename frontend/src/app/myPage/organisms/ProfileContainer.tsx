'use client';

import { useEffect, useState } from 'react';
import Dropdown from '@/components/atoms/Dropdown';
import FillButton from '@/components/atoms/FillButton';

/** ProfileContainerProps Components
 * @todo dropDownData 타입 변경
 * @param {() => void} onSubmit
 * @param {Any} dropDownData
 * @param {React.Dispatch<React.SetStateAction<{ gender: string | null; yearOfBirth: string | null }>>} setSelectedData DropDown에서 선택된 데이터
 * @returns {JSX.Element}
 */
interface ProfileContainerProps {
  name: string;
  email: string;
  onSubmit: () => void;
  dropDownData: any;
  setSelectedData: React.Dispatch<
    React.SetStateAction<{ gender: string | null; yearOfBirth: string | null }>
  >;
}

export default function ProfileContainer({
  name,
  email,
  onSubmit,
  dropDownData,
  setSelectedData,
}: ProfileContainerProps) {
  const [selectedGender, setSelectedGender] = useState<{
    id: string;
    value: string;
  } | null>(null);
  const [selectedYear, setSelectedYear] = useState<{
    id: string;
    value: string;
  } | null>(null);

  useEffect(() => {
    let genderValue: string | null = null;
    let yearValue: string | null = null;

    if (selectedGender?.value === '선택안함') {
      genderValue = null;
    } else if (selectedGender?.value === '남성') {
      genderValue = 'male';
    } else if (selectedGender?.value === '여성') {
      genderValue = 'female';
    }

    if (selectedYear?.value === '선택안함') {
      yearValue = null;
    } else if (selectedYear?.value !== undefined) {
      yearValue = selectedYear.value;
    }

    setSelectedData({
      gender: genderValue,
      yearOfBirth: yearValue,
    });
  }, [selectedGender, selectedYear, setSelectedData]);

  const genderList = dropDownData.genderList.map((cur: string, idx: number) => {
    return { id: `${idx}_cur`, value: cur };
  });

  const yearsList = dropDownData.yearsList.map((cur: string, idx: number) => {
    return { id: `${idx}_cur`, value: cur };
  });

  return (
    <form
      onSubmit={onSubmit}
      className="w-80 h-2/3 flex flex-col justify-evenly "
    >
      <div className="flex w-full justify-between items-center">
        <p className="p3b">이름</p>
        <p>{name}</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="p3b">이메일</p>
        <p>{email}</p>
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="p3b">성별</p>
        <Dropdown
          placeholder="선택안함"
          list={genderList}
          selectItem={selectedGender}
          setSelectItem={setSelectedGender}
        />
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="p3b">년도</p>
        <Dropdown
          placeholder="선택안함"
          list={yearsList}
          selectItem={selectedYear}
          setSelectItem={setSelectedYear}
        />
      </div>
      <div className="flex w-full justify-between items-center">
        <div />
        <FillButton
          type="submit"
          title="저장하기"
          font="h3b"
          width="w-80"
          height="h-12"
          bgColor="bg-g4"
          disabled={false}
        />
      </div>
    </form>
  );
}
