export interface DropdownItem {
  name: string;
  link: string;
}

export interface HomeDropDownProps {
  isOpen: boolean;
  items: DropdownItem[];
}

export interface HomeNameProps {
  name: string;
}

export interface HomeDDnNameProps extends HomeDropDownProps, HomeNameProps {}
