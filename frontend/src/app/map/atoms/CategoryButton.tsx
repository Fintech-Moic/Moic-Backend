/* eslint-disable react/button-has-type */
import Image from 'next/image';
import ButtonProps from '@/types/button';

interface CategoryButtonProps extends ButtonProps {
  src: string;
  alt: string;
}

/** 카테고리 선택 화면으로 이동하는 Button Component
 * @param {String} src 이미지의 src 주소
 * @param {String} alt 이미지의 정보
 * @returns {JSX.Element} 아이콘 Button Component 반환
 */

export default function CategoryButton({
  type = 'button',
  width,
  height,
  src,
  alt,
  onClick,
}: CategoryButtonProps) {
  return (
    <button type={type} className={`${width} ${height}`} onClick={onClick}>
      <Image src={src} alt={alt} />
    </button>
  );
}
