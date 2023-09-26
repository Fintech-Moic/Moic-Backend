'use client';

import { useForm } from 'react-hook-form';
import SocialLoginButton from '../atoms/SocialLoginButton';
import SignInForm from '../organisms/SignInForm';
import TextButton from '../atoms/TextButton';
import Divider from '../atoms/Divider';
import { signInApi } from '@/api/auth';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    signInApi(data);
  });
  const socialLoginHandle = () => {
    console.log('소셜로그인');
  };

  return (
    <div className="h-full flex flex-col items-center justify-between">
      <SignInForm register={register} errors={errors} onSubmit={onSubmit} />
      <TextButton going="auth/find">
        아이디 혹은 비밀번호를 잊으셨나요?
      </TextButton>
      <div className="w-full flex items-center justify-between">
        <Divider width="w-2/5" />
        <p>또는</p>
        <Divider width="w-2/5" />
      </div>
      <div className="h-1/2">
        <div className="h-1/2 flex flex-col items-center justify-around">
          <SocialLoginButton
            width="w-80"
            height="h-12"
            isKakao
            onClick={socialLoginHandle}
          />
          <SocialLoginButton
            width="w-80"
            height="h-12"
            isKakao={false}
            onClick={socialLoginHandle}
          />
          <TextButton going="auth/signUp">
            혹시 회원가입을 하지 않으셨나요?
          </TextButton>
        </div>
      </div>
    </div>
  );
}
