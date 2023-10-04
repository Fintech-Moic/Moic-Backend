'use client';
import Header from '@/components/molecules/Header';
import Picker from '@/components/atoms/CategoryWheelPicker';
import Map from '@/components/organisms/Map';

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
      <div class="bg-repeat-x" style="background-image: url(...)"></div>
      {/* <div>
              <Image src={banner} alt="banner ads" className="w-100% top-0 h-16" />
            </div> */}
      <div className="flex flex-col space-y-12">
        <div className="mt-6 flex justify-center mx-14 shadow-md rounded-[10px] focus:outline-none">
          <button className="text-center text-Primary font-suit text-xl mx-auto h-14 focus:outline-none">
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
