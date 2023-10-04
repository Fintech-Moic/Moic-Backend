interface TimerProps {
  seconds: number;
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
};
export default function Timer({ seconds }: TimerProps) {
  return (
    <div className="w-16 h-6 border-2 border-Secondary p-2 rounded-[10px]">
      <p>{`${formatTime(seconds)}`}</p>
    </div>
  );
}
