'use client';

import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface DropdownProps {
  placeholder: string;
}
export default function Dropdown({ placeholder }: DropdownProps) {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, []);
  return (
    <div ref={dropdownRef}>
      <div
        className="rounded-[10px] border-[#9BA5B7] border-2 w-36 h-12 flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-hidden="true"
      >
        <span>{placeholder}</span>
        <Image
          src="/assets/BlackChevronLeftIcon.svg"
          alt="화살표이미지"
          width="18"
          height="18"
        />
      </div>
      {isOpen && (
        <ul>
          <li>One</li>
          <li>Two</li>
        </ul>
      )}
    </div>
  );
}
