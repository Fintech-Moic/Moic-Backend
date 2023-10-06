'use client';

import { useRouter } from 'next/navigation';
import { useSetAtom } from 'jotai';
import IconButton from '../atoms/IconButton';
import WhiteRightArrowIcon from '@/../public/assets/WhiteRightArrowIcon.svg';
import WhiteFilterIcon from '@/../public/assets/WhilteFilterIcon.svg';
import { filterOpenAtom } from '@/store/atoms/header';

interface HeaderProps {
  title: string;
  isPrevButton: boolean;
  isFilterButton: boolean;
}

/** 페이지 상단에 배치되는 Header Component
 * @param {String} title Header의 가운데에 배치되는 메인 제목
 * @param {Boolean} isPrevButton 뒤로 돌아가기 버튼의 렌더링 여부
 * @param {Boolean} isFilterButton 필터링 버튼의 렌더링 여부
 * @returns {JSX.Element} Header Component 반환
 */

export default function Header({
  title,
  isPrevButton,
  isFilterButton,
}: HeaderProps) {
  const router = useRouter();
  const setFilterOpen = useSetAtom(filterOpenAtom);
  return (
    <header className="w-100% h-14 bg-y4 flex flex-row justify-between items-center gap-2 pr-2 pl-2 text-white">
      {isPrevButton ? (
        <IconButton
          type="button"
          width="w-10"
          height="h-10"
          src={WhiteRightArrowIcon}
          alt="headerPrevButton"
          onClick={() => {
            router.back();
          }}
        />
      ) : (
        <div className="w-10 h-10" />
      )}
      <span className="h4r">{title}</span>
      {isFilterButton ? (
        <IconButton
          type="button"
          width="w-10"
          height="h-10"
          src={WhiteFilterIcon}
          alt="headerFilterButton"
          onClick={() => {
            setFilterOpen((prev) => !prev);
          }}
        />
      ) : (
        <div className="w-10 h-10" />
      )}
    </header>
  );
}
