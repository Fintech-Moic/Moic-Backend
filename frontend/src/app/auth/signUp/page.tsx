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
import FillButton from '@/components/atoms/FillButton';
import OutlineButton from '@/components/atoms/OutlineButton';
import { signUpApi } from '@/api/auth';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [percent, setPercent] = useState('w-0');
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [selectedData, setSelectedData] = useState<{
    gender: string | null;
    yearOfBirth: string | null;
  }>({ gender: null, yearOfBirth: null });
  const [fillButtonTitle, setFillButtonTitle] = useState('다음으로');
  const genderList = ['선택안함', '남성', '여성'];
  const yearsList = [
    '선택안함',
    ...Array.from({ length: 124 }, (_, i) => (1900 + i).toString()),
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
      if (step === 1) {
        setPercent('w-0');
        setFillButtonTitle('다음으로');
      } else if (step === 2) {
        setPercent('w-1/3');
        setFillButtonTitle('다음으로');
      } else if (step === 3) {
        setPercent('w-2/3');
        setFillButtonTitle('회원가입 하기');
      } else if (step === 4) setPercent('w-full');
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
      if (step === 3) {
        const result = await signUpApi(userData);
        if (result !== null && result.message !== undefined) {
          console.log(result);
          forwardStep();
        } else {
          console.log('회원가입 실패');
        }
      } else if (step === 2) {
        forwardStep();
      }
    };
    signUp();
  }, [userData]);

  const onSubmit = handleSubmit((data) => {
    handleUserDataUpdate(data);
  });

  const nextStep = () => {
    if (step === 2 && personalFormRef.current) {
      personalFormRef.current.requestSubmit();
    } else if (step === 3 && accountFormRef.current) {
      accountFormRef.current.requestSubmit();
    } else if (step === 1) forwardStep();
  };

  const prevStep = () => {
    if (step > 1) backStep();
    else router.push('/auth/signIn');
  };

  return (
    <div className="flex flex-col h-full justify-around">
      <ProgressBar percent={percent} />
      <div className="h-2/3">
        {step === 1 && <SignUpTextForm />}
        {step === 2 && (
          <SignUpPersonalForm
            ref={personalFormRef}
            register={register}
            errors={errors}
            dropDownData={dropDownData}
            onSubmit={onSubmit}
            setSelectedData={setSelectedData}
          />
        )}
        {step === 3 && (
          <SignUpAccountForm
            ref={accountFormRef}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
          />
        )}
        {step === 4 && <SignUpSuccessForm />}
      </div>
      {step < 4 && (
        <div className="flex h-1/4 w-full justify-between">
          <OutlineButton
            type="button"
            title="뒤로 가기"
            font="captionb"
            width="w-32"
            height="h-8"
            lineColor="border-g4"
            onClick={prevStep}
          />
          <FillButton
            type="button"
            title={fillButtonTitle}
            font="captionb"
            width="w-32"
            height="h-8"
            bgColor="bg-g4"
            onClick={nextStep}
          />
        </div>
      )}
    </div>
  );
}
