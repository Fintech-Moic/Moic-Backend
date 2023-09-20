import TitleSentence from '@/components/atoms/TitleSentence';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col justify-evenly items-center">
      <div className="h-1/4 flex items-center">
        <TitleSentence title="조타이로" sentence="처리할거에용" />
      </div>
      <div className="h-3/4">{children}</div>
    </div>
  );
}
