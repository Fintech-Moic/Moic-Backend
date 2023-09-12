import IconButton from '../atoms/IconButton';
import WhiteRightArrowIcon from '@/../public/assets/WhiteRightArrowIcon.svg';
import WhiteFilterIcon from '@/../public/assets/WhilteFilterIcon.svg';

interface HeaderProps {
  title: string;
  isPrevButton: boolean;
  isFilterButton: boolean;
}

export default function Header({
  title,
  isPrevButton,
  isFilterButton,
}: HeaderProps) {
  return (
    <header className="w-100% h-14 bg-[#FFBF69] flex flex-row justify-between items-center gap-2 pr-2 pl-2">
      {isPrevButton ? (
        <IconButton src={WhiteRightArrowIcon} onClick={() => {}} />
      ) : (
        <div />
      )}
      <span className="text-[20px]">{title}</span>
      {isFilterButton ? (
        <IconButton src={WhiteFilterIcon} onClick={() => {}} />
      ) : (
        <div />
      )}
    </header>
  );
}
