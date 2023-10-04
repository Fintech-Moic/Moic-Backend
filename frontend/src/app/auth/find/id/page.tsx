/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import FindIdForm from '../../organisms/FindIdForm';
import FindIdSuccessForm from '../../organisms/FindIdSuccessForm';
import { findIdApi } from '@/api/auth';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(0);
  const [findedId, setFindedId] = useState('');

  const forwardStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    const findIdSuccess = () => {
      forwardStep();
    };
    if (findedId !== '') {
      console.log(findedId);
      findIdSuccess();
    }
  }, [findedId]);

  const FindId = handleSubmit(async (data) => {
    const result = await findIdApi(data);
    setFindedId(result.data.id);
  });

  const router = useRouter();
  const goToSignIn = () => {
    router.push('/auth/signIn');
  };
  const goToFindPassword = () => {
    router.push('/auth/find/password');
  };

  const findIdContentArr = [
    <FindIdForm register={register} errors={errors} onSubmit={FindId} />,
    <FindIdSuccessForm
      id={findedId}
      height="h-2/5"
      topTitle="비밀번호 찾기"
      topBg="bg-y4"
      onClicktop={goToFindPassword}
      bottomTitle="로그인 하기"
      bottomBg="bg-g4"
      onClickbottom={goToSignIn}
    />,
  ];
  return (
    <div className="h-full flex flex-col justify-start items-center">
      {findIdContentArr[step]}
    </div>
  );
}
