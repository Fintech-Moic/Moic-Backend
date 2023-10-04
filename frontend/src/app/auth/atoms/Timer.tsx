import { useState, useEffect } from 'react';

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
};
export default function Timer() {
  const [remainingTime, setRemainingTime] = useState<number>(180);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [remainingTime]);

  return (
    <div className="w-16 h-8 px-2 text-center border-2 border-Tertiary rounded-[10px] text-red-500 my-1">
      <p>{`${formatTime(remainingTime)}`}</p>
    </div>
  );
}
