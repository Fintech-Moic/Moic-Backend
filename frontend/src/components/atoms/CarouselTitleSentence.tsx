interface CarouselTitleSentenceProps {
  firstTitle: string;
  secondTitle: string;
}
export default function CarouselTitleSentence({
  firstTitle,
  secondTitle,
}: CarouselTitleSentenceProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="captionb">{firstTitle}</span>
      <span className="h4b">{secondTitle}</span>
    </div>
  );
}
