import { TitleSentenceProps } from '@/types/atoms';

export default function TitleSentence({
  title,
  sentence,
  titleSize = 'h1b',
  sentenceSize = 'h4r',
  width = 'w-80',
}: TitleSentenceProps) {
  return (
    <div className={`${width}`}>
      <h2 className={`${titleSize}`}>{title}</h2>
      <p className={`${sentenceSize} text-Secondary`}>{sentence}</p>
    </div>
  );
}
