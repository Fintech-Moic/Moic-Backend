import TitleSentence from '@/components/atoms/TitleSentence';
import FillButton from '@/components/atoms/FillButton';

export default function page() {
  return (
    <div className="h-full flex flex-col justify-evenly">
      <TitleSentence
        title="아이디 / 비밀번호 찾기"
        sentence="인증을 통해 계정 정보를 찾아보세요"
      />
      <div>
        <FillButton
          type="button"
          title="아이디 찾기"
          font="h3b"
          width="w-80"
          height="h-12"
          bgColor="bg-g4"
        />
        <FillButton
          type="button"
          title="비밀번호 찾기"
          font="h3b"
          width="w-80"
          height="h-12"
          bgColor="bg-y4"
        />
      </div>
      <div />
      <div />
    </div>
  );
}
