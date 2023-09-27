import FillButton from '../atoms/FillButton';
import OutlineButton from '../atoms/OutlineButton';

interface BothButtonGroupProps {
  leftTitle: string;
  onClickLeft: React.MouseEventHandler<HTMLButtonElement>;
  rightTitle: string;
  onClickRight: React.MouseEventHandler<HTMLButtonElement>;
}
export default function BothButtonGroup({
  leftTitle,
  onClickLeft,
  rightTitle,
  onClickRight,
}: BothButtonGroupProps) {
  return (
    <div className="flex h-1/4 w-full justify-between">
      <OutlineButton
        type="button"
        title={leftTitle}
        font="captionb"
        width="w-32"
        height="h-8"
        lineColor="border-g4"
        onClick={onClickLeft}
      />
      <FillButton
        type="button"
        title={rightTitle}
        font="captionb"
        width="w-32"
        height="h-8"
        bgColor="bg-g4"
        onClick={onClickRight}
      />
    </div>
  );
}
