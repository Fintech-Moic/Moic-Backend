'use client';

import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import ProgressBar from '../../atoms/ProgressBar';
import FindPasswordSendForm from '../../organisms/FindPasswordSendForm';
import FindPasswordCheckForm from '../../organisms/FindPasswordCheckForm';
import FindPasswordChangeForm from '../../organisms/FindPasswordChangeForm';
import AuthSuccessForm from '../../organisms/AuthSuccessForm';
import {
  sendPasswordApi,
  checkPasswordApi,
  changePasswordApi,
} from '@/api/auth';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [percent, setPercent] = useState('w-0');
  const [step, setStep] = useState(0);
  const [id, setId] = useState([]);
  const [checkForm, setCheckForm] = useState(true);
  const [showToChangePassword, setShowToChangePassword] = useState(true);

  const forwardStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    const settingProgress = () => {
      if (step === 0) {
        setPercent('w-0');
      } else if (step === 1) {
        setPercent('w-1/2');
      } else if (step === 2) {
        setPercent('w-full');
      }
    };
    settingProgress();
  }, [step]);

  const sendPassword = handleSubmit(async (data) => {
    console.log(data);
    const result = await sendPasswordApi(data);
    if (result !== null) setCheckForm(true);
  });
  const checkPassword = handleSubmit(async (data) => {
    const result = await checkPasswordApi(data);
    if (result !== null) setShowToChangePassword(true);
  });

  const findPasswordContentArr = [
    <div className="w-full h-full flex flex-col justify-around">
      <FindPasswordSendForm
        register={register}
        errors={errors}
        onSubmit={sendPassword}
      />
      {checkForm && (
        <FindPasswordCheckForm
          register={register}
          errors={errors}
          onSubmit={checkPassword}
          showToChangePassword={showToChangePassword}
          onClick={forwardStep}
        />
      )}
    </div>,
    <FindPasswordChangeForm
      register={register}
      errors={errors}
      onSubmit={forwardStep}
    />,
    <AuthSuccessForm buttonTitle="로그인하기" goingTo="auth/signIn">
      <section className="flex flex-col items-center">
        <div className="h3b flex">
          <h2>비밀번호 재설정을 성공했어요</h2>
        </div>
        <p className="p2r text-Primary">이제, 로그인을 해볼까요?</p>
      </section>
    </AuthSuccessForm>,
  ];
  return (
    <div className="flex flex-col h-full">
      <ProgressBar percent={percent} />
      <div className="h-2/3">{findPasswordContentArr[step]}</div>
    </div>
  );
}
