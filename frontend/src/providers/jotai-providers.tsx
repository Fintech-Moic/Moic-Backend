'use client';

import React from 'react';
import { Provider as JotaiProvider } from 'jotai';
import { atom, useAtom } from 'jotai';

export const countAtom = atom(0);

export function JotaiWrapper({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      {children}
    </JotaiProvider>
  );
}
