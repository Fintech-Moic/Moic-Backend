'use client';

import { forwardRef, useEffect, useState } from 'react';
import InputForm from '../molecules/InputForm';
import { SignUpFormProps } from '@/types/auth';
import Dropdown from '@/components/atoms/Dropdown';

/**
 * @param {Any} dropDownData
 * @returns {JSX.Element}
 */
interface SignUpPersonalFormProps extends SignUpFormProps {
  dropDownData: any;
  setSelectedData: React.Dispatch<
    React.SetStateAction<{ gender: string | null; yearOfBirth: string | null }>
  >;
}

const SignUpPersonalForm = forwardRef(
  (
    {
      register,
      errors,
      onSubmit,
      dropDownData,
      setSelectedData,
    }: SignUpPersonalFormProps,
    ref: React.Ref<HTMLFormElement>
  ) => {
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

    const genderList = dropDownData.genderList.map(
      (cur: string, idx: number) => {
        return { id: `${idx}_cur`, value: cur };
      }
    );

    const yearsList = dropDownData.yearsList.map((cur: string, idx: number) => {
      return { id: `${idx}_cur`, value: cur };
    });

    return (
      <form
        ref={ref}
        onSubmit={onSubmit}
        className="w-full h-full flex flex-col justify-evenly"
      >
        <InputForm
          register={register}
          id="name"
          name="name"
          type="text"
          placeholder="이름"
          isError={Boolean(errors.name)}
          notice={errors.name?.message}
          width="w-80"
          height="h-12"
        />
        <InputForm
          register={register}
          id="email"
          name="email"
          type="text"
          placeholder="이메일"
          isError={Boolean(errors.email)}
          notice={errors.email?.message}
          width="w-80"
          height="h-12"
        />
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
      </form>
    );
  }
);

export default SignUpPersonalForm;
