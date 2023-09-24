import Image from 'next/image';
import ButtonProps from '@/types/button';

interface IconButtonProps extends ButtonProps {
  src: string;
  alt: string;
}

/** 아이콘 Button Component
 * @param {String} src 이미지의 src 주소
 * @param {String} alt 이미지의 정보
 * @returns {JSX.Element} 아이콘 Button Component 반환
 */

export default function IconButton({
  type,
  width,
  height,
  src,
  alt,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`${width} ${height} relative`}
      onClick={onClick}
    >
      <Image src={src} alt={alt} />
    </button>
  );
}
