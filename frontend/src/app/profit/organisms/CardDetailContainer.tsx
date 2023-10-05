'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CardBenefitList from '../molecules/CardBenefitList';
import CardTitleGroup from '../molecules/CardTitleGroup';
import { CardDetail, CardBenefit } from '../../../types/card';
import { getCardDetail } from '@/api/card';
import useCustomQuery from '@/hooks/useCustomQuery';

/** 카드 상세 페이지의 테두리부터 내용까지 렌더링하는 컴포넌트
 * @param {String} cardName 현재 페이지 url의 param
 * @returns {JSX.Element} 컴포넌트 반환
 */

export default function CardDetailContainer({
  cardName,
}: {
  cardName: string;
}) {
  const router = useRouter();
  const { data, isLoading } = useCustomQuery(
    {
      queryKey: ['getCardDetail', cardName],
      queryFn: () => getCardDetail(cardName),
      staleTime: 1000 * 60 * 100,
      refetchOnWindowFocus: false,
    },
    router
  );

  if (isLoading)
    return (
      <div className="h-full shadow-md flex flex-col justify-start items-center gap-16 rounded-3xl bg-white px-9 py-12 overflow-scroll">
        <div className="w-[268px] h-[168px] rounded-lg bg-Skeleton" />
        <div className="flex flex-col items-center gap-7">
          <div className="flex flex-col justify-start items-start w-full gap-1">
            <div className="w-14 h-10 bg-Skeleton rounded-lg" />
            <div className="w-28 h-7 bg-Skeleton rounded-lg" />
          </div>
          <div className="flex flex-col justify-start item-start gap-6">
            <div className="w-24 h-9 bg-Skeleton text-white rounded-md flex items-center justify-center h3b" />
            <ul className="flex flex-col justify-start item-start gap-4">
              <li>
                <div className="w-[262px] h-4 bg-Skeleton rounded-lg" />
              </li>
              <li>
                <div className="w-[262px] h-4 bg-Skeleton rounded-lg" />
              </li>
              <li>
                <div className="w-[262px] h-4 bg-Skeleton rounded-lg" />
              </li>
              <li>
                <div className="w-[262px] h-4 bg-Skeleton rounded-lg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

  const cardDetail: CardDetail = data?.data || {};
  return (
    <div className="h-full shadow-md flex flex-col justify-start items-center gap-16 rounded-3xl bg-white px-9 py-12 overflow-scroll">
      <Image
        src={cardDetail?.cardImage}
        alt="카드상세이미지"
        width="268"
        height="160"
      />
      <div className="flex flex-col items-center gap-7">
        <CardTitleGroup
          mainTitle={{ size: 'h1b', value: cardDetail?.company as string }}
          subTitle={{ size: 'h4r', value: cardDetail?.name as string }}
        />
        <div className="flex flex-col justify-start item-start gap-6">
          <div className="w-24 h-9 bg-g6 text-white rounded-md flex items-center justify-center h3b">
            혜택
          </div>
          <CardBenefitList
            list={cardDetail?.cardBenefit as Array<CardBenefit>}
          />
        </div>
      </div>
    </div>
  );
}
