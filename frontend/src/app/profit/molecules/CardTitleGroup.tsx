import CardMainTitle from '../atoms/CardMainTitle';
import CardSubTitle from '../atoms/CardSubTitle';

interface CardTitleGroupProps {
  mainTitle: {
    value: string;
    size: string;
  };
  subTitle: {
    value: string;
    size: string;
  };
}
export default function CardTitleGroup({
  mainTitle,
  subTitle,
}: CardTitleGroupProps) {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <CardMainTitle {...mainTitle} />
      <CardSubTitle {...subTitle} />
    </div>
  );
}

/*

      <span className="h1b">{cardDetail?.company}</span>
      <span className="break-words h4r text-CardSubtitle">
        {cardDetail?.name}
      </span>
*/
