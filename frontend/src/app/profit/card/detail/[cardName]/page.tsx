'use client';

import { useParams } from 'next/navigation';
import CardDetailContainer from '@/app/profit/organisms/CardDetailContainer';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default function Page() {
  const params = useParams();
  return (
    <>
      <Header title="카드 상세 조회" isFilterButton isPrevButton />
      <div className="relative px-5 py-9 flex-1 overflow-y-auto">
        <CardDetailContainer cardName={params.cardName as string} />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
