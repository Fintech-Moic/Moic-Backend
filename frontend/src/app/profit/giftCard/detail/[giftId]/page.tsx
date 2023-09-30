'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';
import GiftDetailContainer from '@/app/profit/organisms/GiftDetailContainer';

export default function Page() {
  const params = useParams();
  return (
    <>
      <Header title="기프티콘 상세 조회" isFilterButton={false} isPrevButton />
      <div className="relative px-5 py-9 flex-1 overflow-y-auto">
        <GiftDetailContainer giftId={params.giftId as string} />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
