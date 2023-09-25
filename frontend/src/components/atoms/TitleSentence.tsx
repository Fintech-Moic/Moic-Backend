import { TitleSentenceProps } from '@/types/atoms';

export default function TitleSentence({ title, sentence }: TitleSentenceProps) {
  return (
    <div className="w-80">
      <h2 className="h1b">{title}</h2>
      <p className="h4r">{sentence}</p>
    </div>
  );
}
