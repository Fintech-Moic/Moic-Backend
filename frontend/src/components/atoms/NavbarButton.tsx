import Image from 'next/image';

interface NavbarButtonProps {
  src: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

/** 하단 네비게이션바 Button Component
 * @param {String} src 이미지의 src 주소
 * @param {String} alt 이미지의 정보
 * @param {React.MouseEventHandler<HTMLButtonElement>} onClick button의 클릭 이벤트
 * @returns {JSX.Element} 하단 네비게이션바 Button Component 반환
 */

export default function NavbarButton({ src, alt, onClick }: NavbarButtonProps) {
  return (
    <button type="button" className="w-6 h-6 relative" onClick={onClick}>
      <Image fill src={src} alt={alt} />
    </button>
  );
}
