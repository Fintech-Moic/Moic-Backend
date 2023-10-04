'use client';

import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import YellowError from '@/../public/assets/images/yellowError.png';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const router = useRouter();

  const handleClickReplaceHome = useCallback(() => {
    router.replace('/home');
  }, [router]);
  return (
    <div className="w-full h-full bg-white flex items-center justify-center flex-col gap-10">
      <h1 className="h1b">에러가 발생했습니다...</h1>
      <Image src={YellowError} alt="에러이미지" width="340" height="340" />
      <div className="flex flex-col items-center justify-center">
        <span>네트워크 통신 또는 예상치 못한 접근입니다.</span>
        <span>해당 문제가 계속될 경우 관리자에게 문의해주세요.</span>
        <span>PN : 010-1111-2222</span>
        <span>Email : moicAdmin@gmail.com</span>
      </div>
      <div className="w-[320px] flex justify-between items-center">
        <button
          type="button"
          className="w-32 h-10 bg-o4 rounded-[10px] text-white p3b"
          onClick={handleClickReplaceHome}
        >
          홈으로 가기
        </button>
        <button
          type="button"
          className="w-32 h-10 bg-g4 rounded-[10px] text-white p3b"
          onClick={() => reset()}
        >
          재접속하기
        </button>
      </div>
    </div>
  );
}
