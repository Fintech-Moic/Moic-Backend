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
      <div className="w-full h-full relative px-5 py-9">
        <CardDetailContainer cardName={params.cardName as string} />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
