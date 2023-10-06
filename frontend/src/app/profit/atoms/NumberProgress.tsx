interface NumberProgressProps {
  startTitle?: string;
  maxLength: number;
  currentProgress: number;
  endTitle?: string;
}

export default function NumberProgress({
  startTitle,
  maxLength,
  currentProgress,
  endTitle,
}: NumberProgressProps) {
  return (
    <div className="text-Secondary text-center break-words">
      {(() => {
        if (currentProgress === 0 && startTitle) {
          return <span>{startTitle}</span>;
        }
        if (currentProgress === maxLength && endTitle) {
          return <span>{endTitle}</span>;
        }
        return <span>{`${currentProgress} / ${maxLength}`}</span>;
      })()}
    </div>
  );
}
