import Link from 'next/link';

interface TextButtonProps {
  children: string;
  going: string;
}

export default function TextButton({ children, going }: TextButtonProps) {
  return (
    <Link href={`/${going}`} className="captionr text-Primary">
      {children}
    </Link>
  );
}
