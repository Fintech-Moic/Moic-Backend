import { useRouter } from 'next/router';
import IconButton from '../atoms/IconButton';
import WhiteRightArrowIcon from '@/../public/assets/WhiteRightArrowIcon.svg';
import WhiteFilterIcon from '@/../public/assets/WhilteFilterIcon.svg';

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
  return (
    <header className="w-100% h-14 bg-[#FFBF69] flex flex-row justify-between items-center gap-2 pr-2 pl-2">
      {isPrevButton ? (
        <IconButton
          src={WhiteRightArrowIcon}
          onClick={() => {
            router.back();
          }}
        />
      ) : (
        <div />
      )}
      <span className="text-[20px]">{title}</span>
      {isFilterButton ? (
        <IconButton
          src={WhiteFilterIcon}
          onClick={() => {
            // fix me! 추후, Card 구현 시 로직 추가
          }}
        />
      ) : (
        <div />
      )}
    </header>
  );
}
