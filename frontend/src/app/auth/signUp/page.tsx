'use client';

import { useState } from 'react';
import ProgressBar from '../atoms/ProgressBar';

export default function Page() {
  const [percent, setPercent] = useState<string>('0');
  console.log(setPercent);

  return (
    <div>
      <ProgressBar percent={percent} />
    </div>
  );
}
