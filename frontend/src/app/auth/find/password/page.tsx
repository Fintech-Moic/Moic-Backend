/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

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
  const [idData, setIdData] = useState<{} | null>(null);
  const [passwordData, setPasswordData] = useState<{} | null>(null);
  const [checkForm, setCheckForm] = useState(false);
  const [showToChangePassword, setShowToChangePassword] = useState(false);

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
    const result = await sendPasswordApi(data);
    if (result) {
      setCheckForm(true);
    }
  });
  const checkPassword = handleSubmit((data) => {
    setIdData({
      id: data.id,
      certification: data.certification,
    });
  });
  const changePassword = handleSubmit((data) => {
    setPasswordData({
      ...idData,
      password: data.password,
      passwordCheck: data.passwordCheck,
    });
  });

  useEffect(() => {
    const passwordCheck = async () => {
      if (idData !== null) {
        const result = await checkPasswordApi(idData);
        if (result) setShowToChangePassword(true);
      }
    };
    if (idData !== null) passwordCheck();
  }, [idData]);

  useEffect(() => {
    const passwordChange = async () => {
      if (passwordData !== null) {
        const result = await changePasswordApi(passwordData);
        if (result) forwardStep();
      }
    };
    if (passwordData !== null) passwordChange();
  }, [passwordData]);

  const findPasswordContentArr = [
    <div className="w-full h-full flex flex-col justify-between">
      <FindPasswordSendForm
        register={register}
        errors={errors}
        onSubmit={sendPassword}
      />
      {checkForm && (
        <div className="h-1/3 flex flex-col justify-between">
          <FindPasswordCheckForm
            register={register}
            errors={errors}
            onSubmit={checkPassword}
            showToChangePassword={showToChangePassword}
            onClick={forwardStep}
          />
        </div>
      )}
    </div>,
    <FindPasswordChangeForm
      register={register}
      errors={errors}
      onSubmit={changePassword}
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
