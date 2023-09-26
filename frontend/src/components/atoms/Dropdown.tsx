'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface DropdownProps {
  placeholder: string;
  list: Array<{ id: string; value: string }>;
  selectItem: { id: string; value: string } | null;
  setSelectItem: React.Dispatch<
    React.SetStateAction<{ id: string; value: string } | null>
  >;
}

/** 공통 Dropdown Component
 * @param {String} placeholder : Dropdown의 값 미선택 시 나오는 placeholder 지정
 * @param {Array<{ id: string; value: string }>} list : 드롭다운 클릭 시 나오는 선택 가능한 리스트들. id는 key를 대응하며, value는 실제 보이는 값
 * @param {{ id: string; value: string } | null} selectItem : 현재 선택된 값. null 가능성 존재
 * @param {React.Dispatch<React.SetStateAction<{ id: string; value: string } | null>>} setSelectItem selectItem의 상태를 변경해주는 함수
 * @returns {JSX.Element} 컴포넌트 반환
 */
export default function Dropdown({
  placeholder,
  list,
  selectItem,
  setSelectItem,
}: DropdownProps) {
  const dropdownListRef = useRef<HTMLUListElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickListItem = (e: React.MouseEvent<HTMLUListElement>) => {
    const closestListItem = (e.target as HTMLUListElement).closest('li');
    if (!closestListItem) return;
    setIsOpen(false);
    const foundItem = list.find((cur) => cur.id === closestListItem.id);
    if (foundItem) {
      setSelectItem(foundItem);
    }
  };
  useEffect(() => {
    if (isOpen && dropdownListRef.current) {
      dropdownListRef.current.scrollTop = 0;
    }
    const handleOutsideClose = (e: MouseEvent) => {
      if (!e.currentTarget) return;
      if (isOpen && !dropdownRef.current?.contains(e.currentTarget as Node))
        setIsOpen(false);
    };
    document.addEventListener('click', handleOutsideClose);
    return () => document.removeEventListener('click', handleOutsideClose);
  }, [isOpen]);

  return (
    <div className="relative w-36 cursor-pointer p2r">
      <div
        className="px-2 rounded-[10px] border-Secondary bg-white border-2 h-12 flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-hidden="true"
      >
        <span>{selectItem !== null ? selectItem.value : placeholder}</span>
        <div
          className={`transition-all delay-100 ease-in-out ${
            isOpen ? '-rotate-90' : 'rotate-0'
          }`}
        >
          <Image
            src="/assets/BlackChevronLeftIcon.svg"
            alt="화살표이미지"
            width="18"
            height="18"
          />
        </div>
      </div>
      <ul
        ref={dropdownListRef}
        className={`absolute mt-2 w-full max-h-40 bg-white border-Secondary rounded-lg border-2 grid grid-cols-1 divide-y 
             ${
               isOpen
                 ? 'max-h-40 overflow-auto transition-[max-height,opacity] duration-300 ease-in-out opacity-100 visibility-visible pointer-events-auto z-10'
                 : 'max-h-0 overflow-auto transition-[max-height,opacity] duration-300 ease-in-out opacity-0 visibility-hidden pointer-events-none'
             }`}
        onClick={handleClickListItem}
        aria-hidden="true"
      >
        {list.map(({ id, value }) => (
          <li
            key={id}
            id={id}
            className="h-10 text-center flex items-center justify-center"
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
