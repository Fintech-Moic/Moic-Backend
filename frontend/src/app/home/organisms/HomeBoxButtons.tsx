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
    <div>
      {boxs.map((box) => (
        <div>
          <HomeBoxButton
            width=""
            height=""
            going={box.going}
            imgSrc={box.imgSrc}
            title={box.title}
            sentence={box.sentence}
          />
        </div>
      ))}
    </div>
  );
}
