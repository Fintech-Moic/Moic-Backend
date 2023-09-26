'use client';

import { useCallback } from 'react';
import ButtonProps from '@/types/button';

interface OutlineButtonProps extends ButtonProps {
  lineColor: string;
}

/** 테투리 선이 보이는 Button Component
 * @param {String} lineColor 테두리 선의 색깔
 * @returns {JSX.Element} 테투리 선이 보이는 Button Component 반환
 */

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
      className={`${width} ${height} captionr bg-white border-solid ${borderRadius} rounded-[10px] flex justify-center border-2 items-center ${lineColor}`}
      onClick={handleOnClick}
    >
      {title}
    </button>
  );
}
