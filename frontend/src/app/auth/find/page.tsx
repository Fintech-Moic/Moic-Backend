'use client';

import { useRouter } from 'next/navigation';
import TwinsButtonGroup from '@/components/molecules/TwinsButtonGroup';
import { useAlreadySignInChecker } from '@/hooks/useSignInChecker';

export default function Page() {
  useAlreadySignInChecker();
  const router = useRouter();
  const goToFindId = () => {
    router.push('/auth/find/id');
  };
  const goToFindPassword = () => {
    router.push('/auth/find/password');
  };

  return (
    <div className="h-full flex flex-col justify-start items-center">
      <TwinsButtonGroup
        height="h-1/5"
        topTitle="아이디 찾기"
        topBg="bg-g4"
        onClicktop={goToFindId}
        bottomTitle="비밀번호 찾기"
        bottomBg="bg-y4"
        onClickbottom={goToFindPassword}
      />
    </div>
  );
}
