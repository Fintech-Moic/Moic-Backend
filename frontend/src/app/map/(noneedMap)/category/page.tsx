'use client';

import banner from "@/../../public/banner.png"
import Image from "next/image";
import Carousel from '@/components/atoms/CategoryCarousel';
import Header from '@/components/molecules/Header';

export default function Page() {

  return (
    <>
      {/* isFilterButton 제거 필요 */}
      <Header title="위치 검색" isPrevButton isFilterButton />
      <Image src={banner} alt="banner ads" className="w-full h-16" />
      <div className="mt-40 mb-40 flex-1"><Carousel /></div>
    </>
  );
}
