import Image from 'next/image';

interface HomeADBoxProps {
  width: string;
  height: string;
  imgSrc: string;
  going: string;
}

/**
 * @param {String} width 너비
 * @param {String} height 높이
 * @param {String} imgSrc 출력될 이미지 src
 * @param {String} going 클릭 시 이동할 경로
 * @returns {JSX.Element} HomeADBox Component
 */

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
