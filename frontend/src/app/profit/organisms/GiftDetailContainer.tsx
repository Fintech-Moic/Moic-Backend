'use client';

import { useQuery } from '@tanstack/react-query';
import { getMyGift } from '@/api/giftCard';
import GiftCard from '@/types/giftCard';

export default function GiftDetailContainer({ giftId }: { giftId: string }) {
  const { data: giftData, isLoading } = useQuery({
    queryKey: ['getMyGift'],
    queryFn: () => getMyGift(),
    staleTime: 1000 * 60 * 100,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>loading...</div>;

  const currentGift = giftData.data.find(
    (curGift: GiftCard) => curGift.id === giftId
  );

  function calculateDaysRemaining(dueDate: string): string {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDifference = due.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (daysRemaining < 0) {
      return '기간이 만료된 기프티콘입니다...';
    }
    return `${daysRemaining}일 남았습니다!`;
  }

  return (
    <div className="h-full shadow-md flex flex-col justify-center items-center gap-8 rounded-3xl bg-white">
      {currentGift ? (
        <>
          <h2 className="h4b">{calculateDaysRemaining(currentGift.dueDate)}</h2>
          <img
            src={currentGift.imageUrl}
            alt="기프티콘 이미지"
            className="w-60 h-96"
          />
        </>
      ) : (
        <span>잘못된 접근입니다.</span>
      )}
    </div>
  );
}
