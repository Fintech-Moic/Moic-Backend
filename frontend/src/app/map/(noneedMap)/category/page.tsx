'use client';

import banner from "@/../../public/banner.png"
import Image from "next/image";
import Carousel from '@/components/atoms/CardCarousel';
import Header from '@/components/molecules/Header';
import { useParams } from 'next/navigation';

export default function Page() {

  const params = useParams();

  return (
    <>
      {/* isFilterButton 제거 필요 */}
      <Header title="위치 검색" isPrevButton isFilterButton />
      <Image src={banner} alt="banner ads" className="w-full h-14" />
      <Carousel />
    </>
  );
}
