'use client';

import React from 'react';
import Navbar from '@/components/molecules/Navbar';
import Map from '@/components/organisms/Map';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="absolute z-50 w-full mt-7">{children}</div>
      <div id="map" style={{ width: '100vw', height: '100vh' }}>
        <Map />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </div>
  );
}
