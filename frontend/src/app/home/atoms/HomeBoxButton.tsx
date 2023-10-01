import Link from 'next/link';
import Image from 'next/image';
import TitleSentence from '@/components/atoms/TitleSentence';

interface HomeBoxButtonProps {
  width: string;
  height: string;
  title: string;
  sentence: string;
  imgSrc: string;
  going: string;
}

/** HomeBoxButton Component
 * @param {String} going 이동 경로
 * @param {String} imgSrc 이동 경로
 * @param {String} sentence 이동 경로
 * @return {JSX.Element} 사각형 Button Component
 */
export default function HomeBoxButton({
  width,
  height,
  title,
  sentence,
  imgSrc,
  going,
}: HomeBoxButtonProps) {
  return (
    <Link href={`/${going}`}>
      <div className={`${width} ${height} p-2 mt-8 border-2 rounded-[10px]`}>
        <TitleSentence
          title={title}
          titleSize="h4b"
          sentence={sentence}
          sentenceSize="captionr"
          width="w-32"
        />
        <Image src={imgSrc} alt={imgSrc} />
      </div>
    </Link>
  );
}
