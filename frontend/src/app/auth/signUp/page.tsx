'use client';

/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect, useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import ProgressBar from '../atoms/ProgressBar';
import SignUpTextForm from '../organisms/SignUpTextForm';
import SignUpPersonalForm from '../organisms/SignUpPersonalForm';
import SignUpAccountForm from '../organisms/SignUpAccountForm';
import SignUpSuccessForm from '../organisms/SignUpSuccessForm';
import BothButtonGroup from '@/components/molecules/BothButtonGroup';
import { signUpApi } from '@/api/auth';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [percent, setPercent] = useState('w-0');
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState([]);
  const [selectedData, setSelectedData] = useState<{
    gender: string | null;
    yearOfBirth: string | null;
  }>({ gender: null, yearOfBirth: null });
  const [fillButtonTitle, setFillButtonTitle] = useState('다음으로');
  const genderList = ['선택안함', '남성', '여성'];
  const yearsList = [
    '선택안함',
    ...Array.from({ length: 124 }, (_, i) => (2023 - i).toString()),
  ];
  const dropDownData = {
    genderList,
    yearsList,
  };

  const personalFormRef = useRef<any>();
  const accountFormRef = useRef<any>();

  const forwardStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    const settingProgress = () => {
      if (step === 0) {
        setPercent('w-0');
        setFillButtonTitle('다음으로');
      } else if (step === 1) {
        setPercent('w-1/3');
        setFillButtonTitle('다음으로');
      } else if (step === 2) {
        setPercent('w-2/3');
        setFillButtonTitle('회원가입 하기');
      } else if (step === 3) setPercent('w-full');
    };
    settingProgress();
  }, [step]);

  const handleUserDataUpdate = (newData: FieldValues) => {
    setUserData({
      ...userData,
      ...selectedData,
      ...newData,
    });
  };

  useEffect(() => {
    const signUp = async () => {
      if (step === 2) {
        const result = await signUpApi(userData);
        if (result !== null && result.message !== undefined) {
          forwardStep();
        } else {
          console.log('회원가입 실패');
        }
      } else if (step === 1) {
        forwardStep();
      }
    };
    signUp();
  }, [userData]);

  const onSubmit = handleSubmit((data) => {
    handleUserDataUpdate(data);
  });

  const nextStep = () => {
    if (step === 1 && personalFormRef.current) {
      personalFormRef.current.requestSubmit();
    } else if (step === 2 && accountFormRef.current) {
      accountFormRef.current.requestSubmit();
    } else if (step === 0) forwardStep();
  };

  const prevStep = () => {
    if (step > 0) backStep();
    else router.push('/auth/signIn');
  };
  const SignUpContentArr = [
    <SignUpTextForm />,
    <SignUpPersonalForm
      ref={personalFormRef}
      register={register}
      errors={errors}
      dropDownData={dropDownData}
      onSubmit={onSubmit}
      setSelectedData={setSelectedData}
    />,
    <SignUpAccountForm
      ref={accountFormRef}
      register={register}
      errors={errors}
      onSubmit={onSubmit}
    />,
    <SignUpSuccessForm />,
  ];
  return (
    <div className="flex flex-col h-full justify-around">
      <ProgressBar percent={percent} />
      <div className="h-2/3">{SignUpContentArr[step]}</div>
      {step < 3 && (
        <BothButtonGroup
          leftTitle="이전으로"
          onClickLeft={prevStep}
          rightTitle={fillButtonTitle}
          onClickRight={nextStep}
        />
      )}
    </div>
  );
}
