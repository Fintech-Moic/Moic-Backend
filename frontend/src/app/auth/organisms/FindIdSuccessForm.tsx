import TwinsButtonGroup from '@/components/molecules/TwinsButtonGroup';
import { BothButtonGroupProps } from '@/types/auth';

interface FindIdSuccessFormProps extends BothButtonGroupProps {
  id: string;
}

export default function FindIdSuccessForm({
  id,
  height,
  topTitle,
  topBg,
  onClicktop,
  bottomTitle,
  bottomBg,
  onClickbottom,
}: FindIdSuccessFormProps) {
  return (
    <div className="h-2/3 flex flex-col justify-evenly items-center">
      <section className="flex flex-col items-center">
        <h2>회원님의 아이디를 찾았어요!</h2>
        <h1>{id}</h1>
        <p className="p2r text-Primary">
          로그인 후, 다양한 서비스를 누려보세요!
        </p>
      </section>
      <TwinsButtonGroup
        height={height}
        topTitle={topTitle}
        topBg={topBg}
        onClicktop={onClicktop}
        bottomTitle={bottomTitle}
        bottomBg={bottomBg}
        onClickbottom={onClickbottom}
      />
    </div>
  );
}
