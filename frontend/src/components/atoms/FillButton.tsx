/* eslint-disable react/button-has-type */

'use client';

import { useCallback } from 'react';
import ButtonProps from '@/types/button';

interface FillButtonProps extends ButtonProps {
  bgColor: string;
  disabled?: boolean;
}

/** 배경 색이 존재하는 Button Component
 * @param {String} bgColor 버튼의 배경 색깔
 * @returns {JSX.Element} 배경 색이 존재하는 Button Component 반환
 */

export default function FillButton({
  type = 'button',
  bgColor,
  title,
  font = 'captionr',
  onClick,
  width,
  height,
  borderRadius,
  disabled = false,
}: FillButtonProps) {
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
      className={`${width} ${height} ${font} ${bgColor} rounded-lg ${borderRadius} rounded-[10px] flex justify-center items-center text-white disabled:bg-black disabled:opacity-50`}
      onClick={handleOnClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
