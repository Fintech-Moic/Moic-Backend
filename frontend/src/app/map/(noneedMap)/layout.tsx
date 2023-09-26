'use client';

import Navbar from '@/components/molecules/Navbar';
import { useParams } from 'next/navigation';

export default function layout({ children }: { children: React.ReactNode }) {

  const params = useParams();

  return (
    <div className="flex flex-col justify-between h-screen">
      <div>{children}</div>
      <div className="flex justify-center"><Navbar /></div>
    </div>
  );
}
