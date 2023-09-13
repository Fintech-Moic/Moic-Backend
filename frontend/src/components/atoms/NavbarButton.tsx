import Image from 'next/image';

interface NavbarButtonProps {
  src: string;
  alt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function NavbarButton({ src, alt, onClick }: NavbarButtonProps) {
  return (
    <button type="button" className="w-6 h-6 relative" onClick={onClick}>
      <Image fill src={src} alt={alt} />
    </button>
  );
}
