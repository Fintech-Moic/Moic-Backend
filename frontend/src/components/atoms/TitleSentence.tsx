import { TitleSentenceProps } from '@/types/atoms';

export default function TitleSentence({
  title,
  sentence,
  titleSize = 'h1b',
  sentenceSize = 'h4r',
}: TitleSentenceProps) {
  return (
    <div className="w-80">
      <h2 className={`${titleSize}`}>{title}</h2>
      <p className={`${sentenceSize} text-Secondary`}>{sentence}</p>
    </div>
  );
}
