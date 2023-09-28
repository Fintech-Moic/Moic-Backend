import Image from 'next/image';
import Link from 'next/link';
import FillButton from '@/components/atoms/FillButton';
import bluCheck from '@/../public/assets/images/bluCheck.svg';

interface AuthSuccessFormProps {
  children: JSX.Element;
  buttonTitle: string;
  goingTo: string;
}

/**
 * @param {JSX.Element} children 출력될 children props
 * @param {String} buttonTitle FillButton의 Title
 * @param {String} goingTo FillButton 클릭 시 이동될 경로
 * @returns {JSX.Element} AuthSuccessForm Component
 */

export default function AuthSuccessForm({
  children,
  buttonTitle,
  goingTo,
}: AuthSuccessFormProps) {
  return (
    <div className="h-4/5 flex flex-col justify-evenly items-center">
      <Image src={bluCheck} alt="checkButton" className="w-20 h-20" />
      {children}
      <Link href={`/${goingTo}`}>
        <FillButton
          type="button"
          bgColor="bg-g4"
          title={buttonTitle}
          font="h3b"
          width="w-80"
          height="h-12"
        />
      </Link>
    </div>
  );
}
