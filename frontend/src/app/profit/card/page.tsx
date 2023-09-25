import PaginatedCardList from '../organisms/PaginatedCardList';
import ProfitFilter from '../organisms/ProfitFilter';
import Header from '@/components/molecules/Header';
import getAllCard from '@/api/card';
import Navbar from '@/components/molecules/Navbar';

export default async function Page() {
  const searchOption = await getAllCard();

  return (
    <>
      <Header title="전체 카드 조회" isFilterButton isPrevButton />
      <div className="relative flex-1 overflow-y-auto">
        <ProfitFilter data={searchOption.data} />
        <PaginatedCardList listType="read" />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
