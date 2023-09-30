import Link from 'next/link';
import Image from 'next/image';

interface HomeADBoxProps {
  width: string;
  height: string;
  imgSrc: string;
  going: string;
}

export default function HomeADBox({
  width,
  height,
  imgSrc,
  going,
}: HomeADBoxProps) {
  <Link href={`/${going}`} className={`${width} ${height} `}>
    <Image src={imgSrc} alt={imgSrc} />
  </Link>;
}
