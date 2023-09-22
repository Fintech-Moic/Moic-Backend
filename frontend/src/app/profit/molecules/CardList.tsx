'use client';

import { useRouter } from 'next/navigation';
import CardListItem from '../atoms/CardListItem';

interface CardListProps {
  list: Array<{
    company: string;
    type: string;
    name: string;
    cardImage: string;
    mine: boolean;
  }>;
  currentPage: number;
}

export default function CardList({ list, currentPage }: CardListProps) {
  const router = useRouter();
  const handleClickCardItem = (e: React.MouseEvent<HTMLDivElement>) => {
    const closestCardItem = (e.target as HTMLDivElement).closest('div');
    if (!closestCardItem) return;
    router.push(`/profit/card/detail/${closestCardItem.id}`);
  };
  return (
    <div
      className="flex flex-col gap-16 justify-center items-start"
      onClick={handleClickCardItem}
      aria-hidden="true"
    >
      {list
        .slice((currentPage - 1) * 4, Math.min(currentPage * 4, list.length))
        .map((curItem) => (
          <CardListItem key={curItem.name} {...curItem} />
        ))}
    </div>
  );
}
