import Image from 'next/image';

interface IconButtonProps {
  src: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

/** 아이콘 Button Component
 * @param {String} src 이미지의 src 주소
 * @returns {JSX.Element} 아이콘 Button Component 반환
 */

export default function IconButton({ src, onClick }: IconButtonProps) {
  return (
    <button type="button" className="w-10 h-10 relative" onClick={onClick}>
      <Image fill src={src} alt="icon" />
    </button>
  );
}
