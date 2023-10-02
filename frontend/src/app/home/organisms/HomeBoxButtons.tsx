'use client';

import HomeBoxButton from '../molecules/HomeBoxButton';
import { BoxItems } from '@/types/home';

/** HomeBoxButtonsProps
 * @param {BoxItems[]} boxs HomeBoxButton에 전달할 배열
 * @returns {JSX.Element} HomeBoxButtons Component
 */
interface HomeBoxButtonsProps {
  boxs: BoxItems[];
}

export default function HomeBoxButtons({ boxs }: HomeBoxButtonsProps) {
  return (
    <div className="flex flex-wrap justify-between">
      {boxs.map((box) => (
        <HomeBoxButton
          key={box.going}
          width="w-38"
          height="h-56"
          going={box.going}
          imgSrc={box.imgSrc}
          title={box.title}
          sentence={box.sentence}
        />
      ))}
    </div>
  );
}
