'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import NumberProgress from '../atoms/NumberProgress';
import ProfitCardCarousel from '../molecules/ProfitCardCarousel';
import { getMyCard } from '@/api/card';
import CarouselTitleSentence from '@/components/atoms/CarouselTitleSentence';

interface MyCardContainerProps {
  myCard: any;
}
export default function MyCardContainer({ myCard }: MyCardContainerProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['getMyCard'],
    queryFn: () => getMyCard(),
    initialData: myCard,
  });
  const [currentCardProgress, setCurrentCardProgress] = useState(1);
  const { cardList } = data.data;

  if (isLoading) <div>로딩중...</div>;

  const handleClickPrev = () => {
    if (currentCardProgress === 1) return;
    setCurrentCardProgress((prev) => prev - 1);
  };

  const handleClickNext = () => {
    if (currentCardProgress === cardList.length) return;
    setCurrentCardProgress((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <NumberProgress
        startTitle="카드 등록이 가능합니다!"
        maxLength={cardList.length}
        currentProgress={currentCardProgress}
      />
      <ProfitCardCarousel
        data={cardList}
        canDelete
        onClickNext={handleClickNext}
        onClickPrev={handleClickPrev}
      />
      <CarouselTitleSentence
        firstTitle={cardList[currentCardProgress - 1].company}
        secondTitle={cardList[currentCardProgress - 1].name}
      />
    </div>
  );
}
