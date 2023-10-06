'use client';

import React from 'react';
import Navbar from '@/components/molecules/Navbar';
import Map from '@/components/organisms/Map';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="z-50">{children}</div>
      <Map />
      <div className="bg-white z-50 flex justify-center">
        <Navbar />
      </div>
    </div>
  );
}
