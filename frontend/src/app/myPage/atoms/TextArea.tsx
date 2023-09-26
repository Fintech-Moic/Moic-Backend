'use client';

import { forwardRef } from 'react';

const TextArea = forwardRef<HTMLDivElement>((ref) => {
  console.log(ref);
  return (
    <textarea
      className="box-border p-3 border-[1px] border-black border-opacity-50 resize-none outline-none rounded-md w-[320px] h-[400px] text-black"
      placeholder="모익을 사용하셨을 때, 느꼈던 불편한 점, 개선할 점, 관리자에게 문의할 점을 편하게 적어주세요.(최대 5700자)"
      maxLength={5700}
    />
  );
});

export default TextArea;
