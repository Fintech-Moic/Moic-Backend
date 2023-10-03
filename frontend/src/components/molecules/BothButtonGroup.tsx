import FillButton from '../atoms/FillButton';
import OutlineButton from '../atoms/OutlineButton';

interface BothButtonGroupProps {
  leftTitle: string;
  onClickLeft?: React.MouseEventHandler<HTMLButtonElement>;
  leftType?: 'submit' | 'reset' | 'button';
  rightTitle: string;
  onClickRight?: React.MouseEventHandler<HTMLButtonElement>;
  rightType?: 'submit' | 'reset' | 'button';
}
export default function BothButtonGroup({
  leftTitle,
  onClickLeft,
  leftType = 'button',
  rightTitle,
  onClickRight,
  rightType = 'button',
}: BothButtonGroupProps) {
  return (
    <div className="flex h-1/4 w-full justify-between">
      <OutlineButton
        type={leftType}
        title={leftTitle}
        font="captionb"
        width="w-32"
        height="h-8"
        lineColor="border-g4"
        onClick={onClickLeft}
      />
      <FillButton
        type={rightType}
        title={rightTitle}
        font="captionb"
        width="w-32"
        height="h-8"
        bgColor="bg-g4"
        onClick={onClickRight}
        disabled={false}
      />
    </div>
  );
}
