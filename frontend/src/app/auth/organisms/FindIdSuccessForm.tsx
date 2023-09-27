import TwinsButtonGroup from '@/components/molecules/TwinsButtonGroup';
import { TwinsButtonGroupProps } from '@/types/auth';

interface FindIdSuccessFormProps extends TwinsButtonGroupProps {
  id: string;
}
/** FindIdSuccessForm Component
 * @todo id값 별표 처리해주기
 *
 * @param {String} id 찾아낸 id값
 * @returns {JSX.Element} 찾아낸 id값과 TwinsButtonGroup Component를 보여주는 FindIdSuccessForm Component
 */
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
