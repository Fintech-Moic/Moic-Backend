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
  return (
    <div className="flex flex-col gap-16 justify-center items-start">
      {list
        .slice((currentPage - 1) * 4, Math.min(currentPage * 4, list.length))
        .map((curItem) => (
          <CardListItem key={curItem.name} {...curItem} />
        ))}
    </div>
  );
}
