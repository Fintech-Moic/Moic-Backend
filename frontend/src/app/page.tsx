'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SplashCircle from '@/../public/assets/images/splashCircle.svg';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 2000);
    // Cleanup 함수를 반환하여 타이머를 제거합니다. (옵션)
    return () => clearTimeout(timer);
  }, [router]); // 빈 의존성 배열로 useEffect는 마운트될 때만 실행됩니다.

  return (
    <div className="w-full h-full bg-o1 flex justify-center items-center">
      <Image src={SplashCircle} alt="splash" className="relative" />
      <article className="flex flex-col z-10 absolute text-white">
        <div className="flex justify-center h4r">
          <p>이</p>
          <p className="h4b">익</p>
          <p>을&nbsp;</p>
          <p className="h4b">모</p>
          <p>아모아</p>
        </div>
        <h1 className="t1">모익</h1>
      </article>
    </div>
  );
}
