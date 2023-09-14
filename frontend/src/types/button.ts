export default interface ButtonProps {
  type: 'button' | 'submit';
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width: string;
  height: string;
  borderRadius: string;
}
