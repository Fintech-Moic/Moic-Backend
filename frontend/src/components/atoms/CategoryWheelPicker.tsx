import React, { useState } from 'react';
import { useAtomValue } from 'jotai';
import OutlineButton from './OutlineButton';
import { getCategoryShop } from '@/api/map';
import curLocAtom from '@/store/atoms/curLocAtom';

interface WheelPickerProps {
  options: string[];
}

function Picker({ options }: WheelPickerProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const curLoc = useAtomValue<any>(curLocAtom);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleConfirmButtonClick = async () => {
    try {
      if (selectedOption) {
        const data = await getCategoryShop(
          selectedOption,
          curLoc.lat,
          curLoc.lng
        );
        console.log(selectedOption, data);
      } else {
        console.error('옵션이 선택되지 않았습니다.');
      }
    } catch (error) {
      console.error('데이터 가져오기 오류', error);
    }
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
