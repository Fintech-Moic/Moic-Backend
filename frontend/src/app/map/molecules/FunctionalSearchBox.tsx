'use client';

import { useRouter } from 'next/navigation';
import CategoryButton from '../atoms/CategoryButton';
import SearchBox from '../atoms/SimpleSearchBox';
import PrimaryFilterIcon from '@/../../public/assets/PrimaryFilterIcon.svg';
import PrimarySearchIcon from '@/../public/assets/PrimarySearchIcon.svg';
import IconButton from '@/components/atoms/IconButton';

interface FunctionalSearchBoxProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

/** 검색 입력과 검색 버튼이 존재하는 컴포넌트
 * @param {React.FormEventHandler<HTMLFormElement>} onSubmit onSubmit 이벤트
 * @returns {JSX.Element} 컴포넌트 반환
 */

export default function FunctionalSearchBox({
  onSubmit,
}: FunctionalSearchBoxProps) {
  const router = useRouter();

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white flex flex-row items-center justify-between w-10/12 h-14 shadow-md rounded-[10px] focus:outline-none"
    >
      <div className="ml-4 mt-1">
        <CategoryButton
          type="button"
          width="w-10"
          height="h-10"
          src={PrimaryFilterIcon}
          alt="카테고리 검색"
          onClick={() => {
            router.push('/map/category');
          }}
        />
      </div>

      <SearchBox />

      <div className="mx-4 mt-1">
        <IconButton
          src={PrimarySearchIcon}
          alt="검색버튼"
          width="w-8"
          height="h-9"
        />
      </div>
    </form>
  );
}
