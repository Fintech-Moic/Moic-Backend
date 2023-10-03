'use client';

// import Image from 'next/image';
// import banner from '@/../../public/banner.png';
// import Carousel from '@/components/atoms/CategoryCarousel';
import Header from '@/components/molecules/Header';
import Picker from '@/components/atoms/CategoryWheelPicker';
import Map from '@/components/organisms/Map';
import CategorySearchBox from '../../atoms/CategorySearchBox'

export default function Page() {
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
      <CategorySearchBox />
      {/* <Image src={banner} alt="banner ads" className="w-100% top-0 h-16" /> */}
      <div className="text-center text-black text-base font-light font-['SUIT'] leading-tight">
        원하는 카테고리를 선택하면
        <br />
        혜택 받을 수 있는 매장을 추천합니다.
      </div>
      {/* <div className="mt-40 mb-40 flex-1 overflow-y-auto max-h-[200px]"> */}
        <Picker options={options} />
      {/* </div> */}
      <div className="hidden">
      <Map />
      </div>
    </>
  );
}
