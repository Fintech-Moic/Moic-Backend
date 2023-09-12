'use client';

import { useAtom } from 'jotai';
import { countAtom } from '../../providers/jotai-providers'; // Providers.tsx 파일의 상대 경로를 확인하세요.

export default function JotaiTest() {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
