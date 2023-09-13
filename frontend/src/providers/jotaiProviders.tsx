'use client';

import React from 'react';
import { Provider as JotaiProvider } from 'jotai';

export default function JotaiWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <JotaiProvider>{children}</JotaiProvider>;
}
