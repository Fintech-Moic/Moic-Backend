import { useQuery } from '@tanstack/react-query';
import { getMyGift } from '@/api/giftCard';

export default function GiftDetailContainer({ giftId }: { giftId: string }) {
  const { data: giftData, isLoading } = useQuery({
    queryKey: ['getMyGift'],
    queryFn: () => getMyGift(),
    staleTime: 1000 * 60 * 100,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>loading...</div>;

  const currentGift = giftData.data.find(
    (curGift: any) => curGift.id === giftId
  );

  return (
    <div className="h-full shadow-md flex flex-col justify-center items-center rounded-3xl bg-white">
      {currentGift ? (
        <img
          src={currentGift.imageUrl}
          alt="기프티콘 이미지"
          className="w-60 h-96"
        />
      ) : (
        <span>잘못된 접근입니다.</span>
      )}
    </div>
  );
}
