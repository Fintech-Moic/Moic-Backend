'use client';

import { forwardRef, ForwardedRef } from 'react';

/** ForwardRef를 통해 부모 컴포넌트에서 value를 가져올 수 있게 해주는 Text Area 컴포넌트
 * @param {String} placeholder 글씨가 입력되어 있지 않을 때의 안내 문구
 * @param {number} placeholder TextArea의 최대 가능 입력 글자 수
 * @returns {JSX.Element} 컴포넌트 반환
 */
interface TextAreaProps {
  placeholder: string;
  maxLength: number;
}
function TextArea(
  props: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return (
    <textarea
      className="box-border p-3 border-[1px] border-black border-opacity-50 resize-none outline-none rounded-md w-[320px] h-[400px] text-black"
      {...props}
      ref={ref}
    />
  );
}

export default forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea);
