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
  return (
    <a href={`/${going}`} className={`${width} ${height} flex justify-center`}>
      <Image src={imgSrc} alt={imgSrc} className={`${width} ${height}`} />
    </a>
  );
}
