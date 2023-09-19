import FillButton from '@/components/atoms/FillButton';

export default function page() {
  return (
    <div className="h-full flex flex-col justify-start items-center">
      <div className="h-1/5 flex flex-col justify-evenly">
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
    </div>
  );
}
