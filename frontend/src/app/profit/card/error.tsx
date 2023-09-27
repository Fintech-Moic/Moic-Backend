'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>에러! 잘못된 접근 또는 통신 에러입니다!</h2>
      <button type="button" onClick={() => reset()}>
        재접속하기
      </button>
    </div>
  );
}
