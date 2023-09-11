'use client';

import React from 'react';
import { Provider as JotaiProvider } from 'jotai';

export function JotaiWrapper({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      {children}
    </JotaiProvider>
  );
}
