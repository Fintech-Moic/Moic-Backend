'use client';

import HomeBoxButton from '../atoms/HomeBoxButton';

interface BoxItems {
  going: string;
  imgSrc: string;
  title: string;
  sentence: string;
}

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
