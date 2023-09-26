import { ProgressBarProps } from '@/types/atoms';

export default function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
      <div className={`${percent} bg-g4 h-1.5 rounded-full `} />
    </div>
  );
}
