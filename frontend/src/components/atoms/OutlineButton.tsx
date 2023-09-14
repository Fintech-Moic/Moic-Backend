'use client';

import { useCallback } from 'react';
import ButtonProps from '@/types/button';

interface OutlineButtonProps extends ButtonProps {
  lineColor: string;
}

export default function OutlineButton({
  type,
  lineColor,
  title,
  onClick,
  width,
  height,
  borderRadius,
}: OutlineButtonProps) {
  const handleOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(event);
      }
    },
    [onClick]
  );

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`${width} ${height} captionr bg-white border-solid ${borderRadius} rounded-[10px] flex justify-center items-center ${lineColor}`}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
}
