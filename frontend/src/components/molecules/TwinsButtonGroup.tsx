import FillButton from '../atoms/FillButton';
import { TwinsButtonGroupProps } from '@/types/auth';

export default function TwinsButtonGroup({
  height,
  topTitle,
  topBg,
  onClicktop,
  bottomTitle,
  bottomBg,
  onClickbottom,
}: TwinsButtonGroupProps) {
  return (
    <div className={`${height} flex flex-col justify-evenly`}>
      <FillButton
        type="button"
        title={topTitle}
        font="h3b"
        width="w-80"
        height="h-12"
        bgColor={topBg}
        onClick={onClicktop}
      />
      <FillButton
        type="button"
        title={bottomTitle}
        font="h3b"
        width="w-80"
        height="h-12"
        bgColor={bottomBg}
        onClick={onClickbottom}
      />
    </div>
  );
}
