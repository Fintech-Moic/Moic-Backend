import SearchInput from '../atoms/SearchInput';
import IconButton from '@/components/atoms/IconButton';
import BlackSearchIcon from '@/../public/assets/BlackSearchIcon.svg';

interface SearchInputBarProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

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
