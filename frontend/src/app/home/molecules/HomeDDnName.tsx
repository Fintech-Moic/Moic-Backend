import Image from 'next/image';
import HomeDropDown from '../atoms/HomeDropDown';
import HomeName from '../atoms/HomeName';
import { HomeDDnNameProps } from '@/types/home';
import DropDownOff from '@/../public/assets/images/DropDownOff.svg';
import DropDownOn from '@/../public/assets/images/DropDownOn.svg';

export default function HomeDDnName({
  isOpen,
  items,
  name,
  signOut,
  onClick,
  innerRef,
}: HomeDDnNameProps) {
  return (
    <div className="flex w-20 justify-between items-center">
      <HomeName name={name} />
      <div className="relative" ref={innerRef}>
        <button onClick={onClick} type="button" className="flex items-center">
          <Image
            src={isOpen ? DropDownOn : DropDownOff}
            alt="DropDownIcon"
            className="w-5 h-5"
          />
        </button>
        {isOpen && (
          <HomeDropDown
            isOpen={isOpen}
            items={items}
            signOut={signOut}
            onClick={onClick}
          />
        )}
      </div>
    </div>
  );
}
