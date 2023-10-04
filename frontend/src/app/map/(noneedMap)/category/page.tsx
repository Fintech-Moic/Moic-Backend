'use client';

import Image from 'next/image';
import banner from '@/../../public/GameBanner.png';
import Header from '@/components/molecules/Header';
import Picker from '@/components/atoms/CategoryWheelPicker';
import Map from '@/components/organisms/Map';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const options = [
    '음식',
    '커피',
    '리빙',
    '의료',
    '운동',
    '교육',
    '여행',
    '문화',
  ];

  return (
    <>
      <Header title="위치 검색" isPrevButton isFilterButton={false} />
      <Image src={banner} alt="배너 광고" className="w-full top-0 h-16" />
      <div className="flex flex-col space-y-6">
        <div className="mt-7 flex justify-center mx-14 shadow-md rounded-[10px] focus:outline-none">
          <button
            className="text-center text-Primary font-suit text-xl mx-auto h-14 focus:outline-none"
            onClick={() => router.push('/map/place')}
          >
            직접 검색해 보세요
          </button>
        </div>

        <div className="text-center text-black text-base font-light font-['SUIT'] leading-tight">
          원하는 카테고리를 선택하면
          <br />
          혜택 받을 수 있는 매장을 추천합니다.
        </div>

        <Picker options={options} />
      </div>
      <div className="hidden">
        <Map />
      </div>
    </>
  );
}
