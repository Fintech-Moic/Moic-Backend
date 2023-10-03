import React, { useState } from 'react';
import WheelPicker from 'react-simple-wheel-picker';
import OutlineButton from './OutlineButton';
import { getCategoryShop } from '@/api/map';

interface Option {
  id: string;
  value: string;
}

export default function CategoryCarousel() {
  const setKeyValue = (arr: string[]) => {
    return arr.map((item) => ({
      id: item,
      value: item,
      clicked: false,
    }));
  };

  const newOptionGroups = (optionGroups: Record<string, string[]>) => {
    const groupKeys = Object.keys(optionGroups);
    const groups: Record<string, Option[]> = {};
    groupKeys.forEach((group) => {
      groups[group] = setKeyValue(optionGroups[group]);
    });
    return groups;
  };

  const optionGroups = {
    category: [
      '쇼핑',
      '음식',
      '커피',
      '리빙',
      '의료',
      '운동',
      '교육',
      '여행',
      '문화',
    ],
  };

  const opGroups = newOptionGroups(optionGroups);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 선택한 항목 상태 추가

  // const handleCategoryClick = (selectedItem: string) => {
  //   setSelectedCategory(selectedItem); // 선택한 항목 저장
  // };

  const handleConfirmButtonClick = async () => {
    if (selectedCategory) {
      try {
        const data = await getCategoryShop(selectedCategory);
        console.log('데이터 가져오기 성공:', data.data);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    } else {
      console.error('카테고리를 선택하세요.'); // 선택한 항목이 없을 때 오류 처리
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        {Object.keys(opGroups).map((group) => {
          const data = opGroups[group];
          return (
            <WheelPicker
              key={group}
              data={data}
              /* 빌드 테스트를 위한 임시 주석 처리 */
              // onChange={(selectedItem) => {
              //   const selectedCategory = selectedItem.value;
              //   handleCategoryClick(selectedCategory);
              // }}
              /* 빌드 테스트를 위한 임시 주석 처리 */
              onChange={() => {}}
              height={300}
              width={160}
              itemHeight={50}
              selectedID={data[0].id}
              fontSize={32}
              color="#9BA5B7"
              activeColor="#545F71"
              backgroundColor="none"
              shadowColor="none"
            />
          );
        })}
      </div>
      {/* <div className="absolute bottom-0 right-5"> */}
      <div className="absolute end-10 mt-5">
        <OutlineButton
          onClick={handleConfirmButtonClick}
          title="검색"
          lineColor="border-g4"
          textColor="text-g4"
          width="w-20"
          height="h-8"
          borderRadius="rounded-lg"
          font="SUIT"
        />
      </div>
    </div>
  );
}
