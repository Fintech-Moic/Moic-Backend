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
/** BothButtonGroup Component
 * @param {String} leftTitle OutlineButton Title
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClickLeft OutlineButton Callback 함수
 * @param {'submit' | 'reset' | 'button'} leftType OutlineButton Type
 * @param {String} rightTitle FillButton Title
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClickRight FillButton Callback 함수
 * @param {'submit' | 'reset' | 'button'} rightType FillButton Type
 * @returns 좌측에 OutlineButton 우측에 FillButton이 있는 BothButtonGroup Component
 */

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
