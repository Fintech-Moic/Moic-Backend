import React, { useState } from 'react';
import { useAtomValue } from 'jotai';
import Swal from 'sweetalert2';
import OutlineButton from './OutlineButton';
import { getCategoryShop } from '@/api/map';
import curLocAtom from '@/store/atoms/curLocAtom';

interface WheelPickerProps {
  options: string[];
}

function Picker({ options }: WheelPickerProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const curLoc = useAtomValue<any>(curLocAtom);

  const handleConfirmButtonClick = async () => {
    try {
      if (selectedOption) {
        const data = await getCategoryShop(
          selectedOption,
          curLoc.lat,
          curLoc.lng
        );
        console.log(selectedOption, data);
        if (!data.shopList) {
          Swal.fire(
            '혜택을 받을 수 있는 카테고리가 없네요',
            '다른 카테고리를 선택해주세요',
            'warning'
          );
        } else {
          // 이동 코드 구현
        }
      } else {
        Swal.fire('옵션이 선택되지 않았어요');
      }
    } catch (error) {
      console.error('데이터 가져오기 오류', error);
      Swal.fire('일시적 오류', '다시 시도해주세요', 'warning');
    }
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-[300px] justify-center items-center focus:outline-none">
      <div className="flex flex-col items-center gap-3 cursor-pointer">
        {options.map((option) => (
          <div
            key={option}
            className={`${
              option === selectedOption
                ? 'px-9 text-[20px] text-black transition-transform font-bold scale-125 bg-slate-500/10 animate-[shadow-drop-2-tb]'
                : 'px-9 text-[16px] text-Secondary transition-transform'
            }`}
            onClick={() => handleOptionClick(option)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleOptionClick(option);
              }
            }}
            role="button"
            tabIndex={0}
          >
            {option}
          </div>
        ))}

        <OutlineButton
          lineColor="border-g4"
          textColor="text-g4"
          title="검색"
          onClick={handleConfirmButtonClick}
          width="w-20"
          height="h-8"
          borderRadius="rounded-lg"
          font="SUIT"
        />
      </div>
    </div>
  );
}

export default Picker;
