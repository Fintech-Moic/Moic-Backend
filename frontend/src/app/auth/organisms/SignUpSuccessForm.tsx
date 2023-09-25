import Image from 'next/image';
import Link from 'next/link';
import FillButton from '@/components/atoms/FillButton';
import bluCheck from '@/../public/assets/images/bluCheck.svg';

export default function SignUpSuccessForm() {
  return (
    <div className="h-2/3 flex flex-col justify-evenly items-center">
      <Image src={bluCheck} alt="checkButton" className="w-20 h-20" />
      <section className="flex flex-col items-center">
        <h2 className="h3b flex">
          <h2 className="text-y4">모익</h2>에 오신걸 환영해요
        </h2>
        <p className="p2r text-Primary">
          로그인 후, 다양한 서비스를 누려보세요!
        </p>
      </section>
      <Link href="/auth/signIn">
        <FillButton
          type="button"
          bgColor="bg-g4"
          title="로그인하기"
          font="h3b"
          width="w-80"
          height="h-12"
        />
      </Link>
    </div>
  );
}
