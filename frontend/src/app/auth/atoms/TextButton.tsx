import Link from 'next/link';

interface TextButtonProps {
  children: string;
  going: string;
}

/** TextButton Component
 * @param {String} children 버튼에 들어갈 text
 * @param {String} going 이동할 주소
 * @returns {JSX.Element} TextButton Component 반환
 */

export default function TextButton({ children, going }: TextButtonProps) {
  return (
    <Link href={`/${going}`} className="captionr text-Primary">
      {children}
    </Link>
  );
}
