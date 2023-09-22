import { useCallback } from 'react';
import Image from 'next/image';
import Kakao from '@/../../public/assets/images/Kakao.svg';
import Google from '@/../../public/assets/images/Google.svg';

interface SocialLoginButtonProps {
  width: string;
  height: string;
  isKakao: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/** 소셜 로그인 Button Component
 * @param {Boolean} isKakao 소셜 로그인 회사
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick button의 클릭 이벤트
 * @returns {JSX.Element} 소셜 로그인 Button Component 반환
 */

export default function SocialLoginButton({
  width,
  height,
  isKakao,
  onClick,
}: SocialLoginButtonProps) {
  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }
    },
    [onClick]
  );

  return (
    <button
      type="button"
      className={`${width} ${height} h3b bg-white border-solid border-2 rounded-[10px] flex justify-center items-center`}
      onClick={handleOnClick}
    >
      <div className="flex">
        <Image
          src={isKakao ? Kakao : Google}
          alt={isKakao ? '카카오 소셜 로그인' : '구글 소셜 로그인'}
        />
        <p>{isKakao ? '카카오로 로그인하기' : '구글로 로그인하기'}</p>
      </div>
    </button>
  );
}
