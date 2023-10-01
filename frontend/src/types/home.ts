export interface DropdownItem {
  name: string;
  link: string;
}

export interface HomeDropDownProps {
  isOpen: boolean;
  items: DropdownItem[];
  signOut: React.MouseEventHandler<HTMLButtonElement>;
  onClick: () => void;
}

export interface HomeNameProps {
  name: string;
}

export interface HomeDDnNameProps extends HomeDropDownProps, HomeNameProps {}
