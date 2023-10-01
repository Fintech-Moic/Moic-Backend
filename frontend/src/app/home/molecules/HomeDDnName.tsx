import HomeDropDown from '../atoms/HomeDropDown';
import HomeName from '../atoms/HomeName';
import { HomeDDnNameProps } from '@/types/home';

export default function HomeDDnName({ isOpen, items, name }: HomeDDnNameProps) {
  return (
    <div className="flex">
      <HomeName name={name} />
      <HomeDropDown isOpen={isOpen} items={items} />
    </div>
  );
}
