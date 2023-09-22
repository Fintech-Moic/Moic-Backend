import PaginatedCardList from '../organisms/PaginatedCardList';
import ProfitFilter from '../organisms/ProfitFilter';
import getAllCard from '@/api/card';

export default async function Page() {
  const searchOption = await getAllCard();

  return (
    <div className="w-full h-full relative">
      <ProfitFilter data={searchOption.data} />
      <PaginatedCardList data={searchOption.data.cardList} />
    </div>
  );
}
