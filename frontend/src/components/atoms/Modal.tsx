/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (typeof window === 'undefined') return <></>;

  return mounted ? (
    createPortal(
      <div className="w-screen h-screen bg-black bg-opacity-50 z-50 fixed top-0 bottom-0 right-0 left-0">
        <div className="w-[360px] box-border px-5 py-16 bg-white rounded-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>,
      document.getElementById('modal') as HTMLElement
    )
  ) : (
    <></>
  );
}
