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

/** 카드 아이템으로 구성된 리스트 컴포넌트
 * @param {Array} list 카드 response의 array
 * @param {Number} currentPage 현재 페이지를 나타내는 정수
 * @returns {JSX.Element} 컴포넌트 반환
 */
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
