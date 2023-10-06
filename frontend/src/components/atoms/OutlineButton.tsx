'use client';

import { useCallback } from 'react';
import ButtonProps from '@/types/button';

interface OutlineButtonProps extends ButtonProps {
  lineColor: string;
  textColor?: string;
}

/** 테투리 선이 보이는 Button Component
 * @param {String} lineColor 테두리 선의 색깔
 * @returns {JSX.Element} 테투리 선이 보이는 Button Component 반환
 */

export default function OutlineButton({
  type = 'button',
  lineColor,
  textColor = 'text-black',
  title,
  onClick,
  width,
  height,
  borderRadius,
  font = 'captionr',
  disabled = false,
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
      className={`${width} ${height} ${font} bg-white border-solid ${borderRadius} rounded-[10px] flex justify-center border-2 items-center ${lineColor} ${textColor} disabled:bg-black disabled:opacity-50`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
