import SearchInput from '../atoms/SearchInput';
import IconButton from '@/components/atoms/IconButton';
import BlackSearchIcon from '@/../public/assets/BlackSearchIcon.svg';

interface SearchInputBarProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

/** 검색 입력과 검색 버튼이 존재하는 컴포넌트
 * @param {React.FormEventHandler<HTMLFormElement>} onSubmit onSubmit 이벤트
 * @returns {JSX.Element} 컴포넌트 반환
 */

export default function SearchInputBar({ onSubmit }: SearchInputBarProps) {
  return (
    <form className="relative" onSubmit={onSubmit}>
      <SearchInput />
      <div className="absolute top-1/2 transform -translate-y-1/2 right-1">
        <IconButton
          type="submit"
          src={BlackSearchIcon}
          alt="검색버튼"
          width="w-8"
          height="h-8"
        />
      </div>
    </form>
  );
}
