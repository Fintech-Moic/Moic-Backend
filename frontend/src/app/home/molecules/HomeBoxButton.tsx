import Link from 'next/link';
import Image from 'next/image';
import TitleSentence from '@/components/atoms/TitleSentence';
import { BoxItems } from '@/types/home';

interface HomeBoxButtonProps extends BoxItems {
  width: string;
  height: string;
}

/** HomeBoxButton Component
 * @param {String} width 너비
 * @param {String} height 높이
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
      <div className={`${width} ${height} p-2 mb-4 border-2 rounded-[10px]`}>
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
