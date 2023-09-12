import Image from 'next/image';

interface IconButtonProps {
  src: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function IconButton({ src, onClick }: IconButtonProps) {
  return (
    <button type="button" className="w-10 h-10 relative" onClick={onClick}>
      <Image fill src={src} alt="icon" />
    </button>
  );
}
