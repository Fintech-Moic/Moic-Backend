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
    }, 1000);
    return () => clearTimeout(timer);
  }, [router]);

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
