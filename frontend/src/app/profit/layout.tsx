'use client';

import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header title="전체 카드 조회" isFilterButton isPrevButton />
      <div className="w-full h-full">{children}</div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </div>
  );
}
