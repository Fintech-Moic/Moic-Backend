interface TitleSentenceProps {
  title: string;
  sentence: string;
}

export default function TitleSentence({ title, sentence }: TitleSentenceProps) {
  return (
    <div>
      <h2 className="h1b">{title}</h2>
      <p className="h4r">{sentence}</p>
    </div>
  );
}
