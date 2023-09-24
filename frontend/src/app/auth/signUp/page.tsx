'use client';

import { useState, useEffect, useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
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
  const [percent, setPercent] = useState('w-0');
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const settingProgress = () => {
      if (step === 1) setPercent('w-0');
      else if (step === 2) setPercent('w-1/3');
      else if (step === 3) setPercent('w-2/3');
      else if (step === 4) setPercent('w-full');
    };
    settingProgress();
  }, [step]);

  const forwardStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    setStep(step - 1);
  };
  const handleUserDataUpdate = async (newData: FieldValues) => {
    await setUserData({ ...userData, ...newData });
  };

  const onSubmit = handleSubmit(async (data) => {
    await handleUserDataUpdate(data);
    if (step === 3) {
      const result = await signUpApi(userData);
      if (result !== undefined) {
        forwardStep();
      }
    } else {
      forwardStep();
    }
  });

  const personalFormRef = useRef<any>();
  const accountFormRef = useRef<any>();

  const nextStep = () => {
    if (step === 2 && personalFormRef.current) {
      personalFormRef.current.requestSubmit();
    } else if (step === 3 && accountFormRef.current) {
      accountFormRef.current.requestSubmit();
    } else if (step === 1) forwardStep();
  };

  const prevStep = () => {
    if (step > 1) backStep();
  };

  return (
    <div className="flex flex-col">
      <ProgressBar percent={percent} />
      <div className="h-2/3">
        {step === 1 && <SignUpTextForm />}
        {step === 2 && (
          <SignUpPersonalForm
            ref={personalFormRef}
            register={register}
            errors={errors}
            onSubmit={onSubmit}
          />
        )}
        {step === 3 && (
          <SignUpAccountForm
          // ref={accountFormRef}
          // register={register}
          // errors={errors}
          // onSubmit={onSubmit}
          />
        )}
        {step === 4 && <SignUpSuccessForm />}
      </div>
      {step < 4 && (
        <div className="flex h-1/4">
          <FillButton
            type="button"
            title="다음으로"
            font="captionb"
            width="w-32"
            height="h-8"
            bgColor="g4"
            onClick={nextStep}
          />
          <OutlineButton
            type="button"
            title="뒤로 가기"
            font="captionb"
            width="w-32"
            height="h-8"
            lineColor="g4"
            onClick={prevStep}
          />
        </div>
      )}
    </div>
  );
}
