'use client';

import { useEffect, useState } from 'react';
import Dropdown from '@/components/atoms/Dropdown';
import FillButton from '@/components/atoms/FillButton';
import TextButton from '@/components/atoms/TextButton';

/** ProfileContainerProps Components
 * @todo dropDownData 타입 변경
 * @param {() => void} onSubmit
 * @param {Any} dropDownData
 * @param {React.Dispatch<React.SetStateAction<{ gender: string | null; yearOfBirth: string | null }>>} setSelectedData DropDown에서 선택된 데이터
 * @param {String | Null} fetchSelectedYear fetch해서 가져온 year
 * @param {String | Null} fetchSelectedGender fetch해서 가져온 gender
 * @returns {JSX.Element}
 */
interface ProfileContainerProps {
  name: string;
  email: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  dropDownData: any;
  setSelectedData: React.Dispatch<
    React.SetStateAction<{ gender: string | null; yearOfBirth: string | null }>
  >;
  fetchSelectedYear: string | null;
  fetchSelectedGender: string | null;
}

export default function ProfileContainer({
  name,
  email,
  onSubmit,
  dropDownData,
  setSelectedData,
  fetchSelectedGender,
  fetchSelectedYear,
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

  useEffect(() => {
    let genderValue: string | null = null;
    let yearValue: string | null = null;

    if (fetchSelectedGender === null) {
      genderValue = '선택안함';
    } else if (fetchSelectedGender === 'male') {
      genderValue = '남성';
    } else if (fetchSelectedGender === 'female') {
      genderValue = '여성';
    }

    if (fetchSelectedYear === null) {
      yearValue = '선택안함';
    } else if (fetchSelectedYear !== undefined) {
      yearValue = fetchSelectedYear;
    }
    if (genderValue !== null)
      setSelectedGender({ id: '0_cur', value: genderValue });
    if (yearValue !== null) setSelectedYear({ id: '0_cur', value: yearValue });
    setSelectedData({
      gender: genderValue,
      yearOfBirth: yearValue,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchSelectedGender, fetchSelectedYear]);

  const genderList = dropDownData.genderList.map((cur: string, idx: number) => {
    return { id: `${idx}_cur`, value: cur };
  });

  const yearsList = dropDownData.yearsList.map((cur: string, idx: number) => {
    return { id: `${idx}_cur`, value: cur };
  });

  return (
    <div className="w-80 h-full flex flex-col justify-between">
      <form
        onSubmit={onSubmit}
        className="w-full h-2/3 flex flex-col justify-evenly"
      >
        <div className="flex w-full justify-between items-center">
          <p className="h4b">이름</p>
          <p className="p2r">{name}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <p className="h4b">이메일</p>
          <p className="p2r">{email}</p>
        </div>
        <div className="flex w-full justify-between items-center">
          <p className="h4b">성별</p>
          <Dropdown
            placeholder="선택안함"
            list={genderList}
            selectItem={selectedGender}
            setSelectItem={setSelectedGender}
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <p className="h4b">년도</p>
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
      <div className="h-1/3 flex flex-col justify-between self-end">
        {/* <TextButton>비밀번호 수정</TextButton>
        <TextButton textColor="text-Secondary">회원 탈퇴</TextButton> */}
      </div>
    </div>
  );
}
