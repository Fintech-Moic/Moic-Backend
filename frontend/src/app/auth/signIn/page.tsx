'use client';

import SocialLoginButton from '../atoms/SocialLoginButton';
// import SignInForm from '../organisms/signInForm';

export default function Page() {
  // const handleSubmit = (data: FormData) => {
  //   console.log('Login Data:', data);
  // };

  const socialLoginHandle = () => {
    console.log('소셜로그인');
  };

  return (
    <div className="h-full flex flex-col items-center justify-evenly">
      <div>
        <SocialLoginButton isKakao onClick={socialLoginHandle} />
        <SocialLoginButton isKakao={false} onClick={socialLoginHandle} />
      </div>
    </div>
  );
}
