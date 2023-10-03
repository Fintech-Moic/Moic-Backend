// import React, { useState } from 'react';
// import WheelPicker from 'react-simple-wheel-picker';
// import OutlineButton from './OutlineButton';
// import { getCategoryShop } from '@/api/map';
// import { useAtom } from 'jotai';
// import curLocAtom from '@/store/atoms/curLocAtom';

// interface Option {
//   id: string;
//   value: string;
// }

// export default function CategoryCarousel() {
//   const [selectedCategory, setSelectedCategory] = useState('')
//   const [curLoc, setCurLoc] = useAtom<any>(curLocAtom);
//   const setKeyValue = (arr: string[]) => {
//     return arr.map((item) => ({
//       id: item,
//       value: item,
//       clicked: false,
//     }));
//   };

//   const newOptionGroups = (optionGroups: Record<string, string[]>) => {
//     const groupKeys = Object.keys(optionGroups);
//     const groups: Record<string, Option[]> = {};
//     groupKeys.forEach((group) => {
//       groups[group] = setKeyValue(optionGroups[group]);
//     });
//     return groups;
//   };

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategory(category);
//   };
  
//   const optionGroups = {
//     category: [
//       '쇼핑',
//       '음식',
//       '커피',
//       '리빙',
//       '의료',
//       '운동',
//       '교육',
//       '여행',
//       '문화',
//     ],
//   };

//   const opGroups = newOptionGroups(optionGroups);

//   const handleConfirmButtonClick = async () => {
//     try {
//       const data = await getCategoryShop('쇼핑', curLoc.lat, curLoc.lng);
//       console.log('데이터 가져오기 성공:', data.data);
//     } catch (error) {
//       console.error('데이터 가져오기 오류:', error);
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-center">
//         {Object.keys(opGroups).map((group) => {
//           const data = opGroups[group];
//           return (
//             <WheelPicker
//               key={group}
//               data={data}
//               onChange={(selectedItem) => handleCategoryChange(selectedItem.value)}
//               height={300}
//               width={160}
//               itemHeight={50}
//               selectedID={data[0].id}
//               fontSize={32}
//               color="#9BA5B7"
//               activeColor="#545F71"
//               backgroundColor="none"
//               shadowColor="none"
//             />
//           );
//         })}
//       </div>
//       <div className="absolute end-10 mt-5">
//         <OutlineButton
//           onClick={handleConfirmButtonClick}
//           title="검색"
//           lineColor="border-g4"
//           textColor="text-g4"
//           width="w-20"
//           height="h-8"
//           borderRadius="rounded-lg"
//           font="SUIT"
//         />
//       </div>
//     </div>
//   );
// }
