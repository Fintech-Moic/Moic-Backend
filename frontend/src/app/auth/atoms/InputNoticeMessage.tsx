import Image from 'next/image';
import check from '@/../public/assets/images/check.svg';

type InputErrorMessageProps = {
  children: string;
  isError: boolean;
};

/**
 * @param {String} children InputNoticeMessage에서 출력될 메시지
 * @param {Boolean} isError InputNoticeMessage뒤에 check icon 여부
 * @returns {JSX.Element} InputNoticeMessage Component 반환
 */

export default function InputNoticeMessage({
  children,
  isError,
}: InputErrorMessageProps) {
  return (
    <div className="w-full flex py-1 items-center">
      <p className="w-2/3 captionr px-2">{children}</p>
      {!isError && <Image src={check} alt="check" />}
    </div>
  );
}
