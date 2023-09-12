'use client';

import React from 'react';
import { Provider as JotaiProvider } from 'jotai';

function JotaiWrapper({ children }: { children: React.ReactNode }) {
  return <JotaiProvider>{children}</JotaiProvider>;
}
export default JotaiWrapper;
