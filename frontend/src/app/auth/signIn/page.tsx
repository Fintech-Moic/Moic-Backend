'use client';

import AuthForm from '../molecules/AuthForm';
import TextButton from '../atoms/TextButton';
import SocialLoginButton from '../atoms/SocialLoginButton';

type FormData = {
  username?: string;
  password?: string;
  email?: string;
  name?: string;
  gender?: string;
  age?: string;
};

export default function Page() {
  const handleSubmit = (data: FormData) => {
    console.log('Login Data:', data);
  };

  const socialLoginHandle = () => {
    console.log('소셜로그인');
  };

  return (
    <div className="h-full flex flex-col items-center justify-evenly">
      <div className="h-1/2 flex flex-col items-center justify-around">
        <AuthForm btntitle="로그인 하기" onSubmit={handleSubmit} />
        <TextButton going="auth/find">
          아이디 또는 비밀번호를 잊으셨나요?
        </TextButton>
      </div>
      <div>
        <SocialLoginButton isKakao onClick={socialLoginHandle} />
        <SocialLoginButton isKakao={false} onClick={socialLoginHandle} />
      </div>
    </div>
  );
}
