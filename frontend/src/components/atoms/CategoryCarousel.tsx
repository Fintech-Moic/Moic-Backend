// import WheelPicker from 'react-simple-wheel-picker';

// type DataSet = {
//   id: string;
//   value: string;
// };

// export default function CategoryCarousel() {
//   /**
//    * 카테고리 Object
//    */
//   const setKeyValue = (arr: string[]): DataSet[] => {
//     return arr.map((item) => ({
//       id: item,
//       value: item,
//     }));
//   };

//   /**
//    * 새로운 옵션 선택시 Object 변경
//    */
//   const newOptionGroups = (
//     optionGroups: Record<string, string[]>
//   ): Record<string, DataSet[]> => {
//     const groupKeys = Object.keys(optionGroups);

//     const groups: Record<string, DataSet[]> = {};
//     groupKeys.forEach((group) => {
//       groups[group] = setKeyValue(optionGroups[group]);
//     });
//     return groups;
//   };

//   const optionGroups = {
//     category: ['쇼핑', '음식', '커피', '리빙', '의료', '운동', '교육', '여행', '문화'],
//   };

//   const opGroups = newOptionGroups(optionGroups);

//   const pickerColumn = Object.keys(opGroups).map((group) => {
//     const data = opGroups[group];

//     return (
//       <WheelPicker
//         key={group}
//         data={data}
//         onChange={() => {}}
//         height={300}
//         width={160}
//         itemHeight={80}
//         selectedID={data[0].id}
//         fontSize={32}
//         color="#9BA5B7"
//         activeColor="#545F71"
//         backgroundColor="none"
//         shadowColor="none"
//       />
//     );
//   });

//   return <div className="flex justify-center">{pickerColumn}</div>;
// }







// import WheelPicker from 'react-simple-wheel-picker';
// import { getCategoryShop } from '@/api/map';

// export default function CategoryCarousel() {
//   const setKeyValue = (arr: string[]) => {
//     return arr.map((item) => ({
//       id: item,
//       value: item,
//     }));
//   };

//   const newOptionGroups = (optionGroups: Record<string, string[]>) => {
//     const groupKeys = Object.keys(optionGroups);
//     const groups: Record<string, DataSet[]> = {};
//     groupKeys.forEach((group) => {
//       groups[group] = setKeyValue(optionGroups[group]);
//     });
//     return groups;
//   };

//   const optionGroups = {
//     category: ['쇼핑', '음식', '커피', '리빙', '의료', '운동', '교육', '여행', '문화'],
//   };

//   const opGroups = newOptionGroups(optionGroups);

//   const handleCategoryClick = async (selectedCategory: string) => {
//     try {
//       const data = await getCategoryShop(selectedCategory);
//       console.log('데이터 가져오기 성공:', data.data);
//       // 여기에서 API 응답 데이터를 처리하거나 원하는 작업을 수행할 수 있습니다.
//     } catch (error) {
//       console.error('데이터 가져오기 오류:', error);
//     }
//   };

//   const pickerColumn = Object.keys(opGroups).map((group) => {
//     const data = opGroups[group];

//     return (
//       <WheelPicker
//         key={group}
//         data={data}
//         onChange={(selectedItem) => {
//           const selectedCategory = selectedItem.value;
//           handleCategoryClick(selectedCategory); // 클릭 이벤트 발생 시 API 요청을 보냅니다.
//         }}
//         height={300}
//         width={160}
//         itemHeight={80}
//         selectedID={data[0].id}
//         fontSize={32}
//         color="#9BA5B7"
//         activeColor="#545F71"
//         backgroundColor="none"
//         shadowColor="none"
//       />
//     );
//   });

//   return <div className="flex justify-center">{pickerColumn}</div>;
// }



import React, { useState } from 'react'; // useState 추가

import WheelPicker from 'react-simple-wheel-picker';
import { getCategoryShop } from '@/api/map';
import OutlineButton from './OutlineButton';

export default function CategoryCarousel() {
  const setKeyValue = (arr: string[]) => {
    return arr.map((item) => ({
      id: item,
      value: item,
    }));
  };

  const newOptionGroups = (optionGroups: Record<string, string[]>) => {
    const groupKeys = Object.keys(optionGroups);
    const groups: Record<string, DataSet[]> = {};
    groupKeys.forEach((group) => {
      groups[group] = setKeyValue(optionGroups[group]);
    });
    return groups;
  };

  const optionGroups = {
    category: ['쇼핑', '음식', '커피', '리빙', '의료', '운동', '교육', '여행', '문화'],
  };

  const opGroups = newOptionGroups(optionGroups);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // 선택한 항목 상태 추가

  const handleCategoryClick = (selectedItem: string) => {
    setSelectedCategory(selectedItem); // 선택한 항목 저장
  };

  const handleConfirmButtonClick = async () => {
    if (selectedCategory) {
      try {
        const data = await getCategoryShop(selectedCategory);
        console.log('데이터 가져오기 성공:', data.data);
        // 여기에서 API 응답 데이터를 처리하거나 원하는 작업을 수행할 수 있습니다.
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
              onChange={(selectedItem) => {
                const selectedCategory = selectedItem.value;
                handleCategoryClick(selectedCategory);
              }}
              height={300}
              width={160}
              itemHeight={80}
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
      <OutlineButton
        onClick={handleConfirmButtonClick} 
        title="검색"
        lineColor="border-g4"
        textColor='text-g4'
        width="w-20"
        height="h-8"
        borderRadius="rounded-lg"
        font="SUIT"
      />
    </div>
  );
}
