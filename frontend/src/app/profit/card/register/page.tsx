import PaginatedCardList from '../../organisms/PaginatedCardList';
import ProfitFilter from '../../organisms/ProfitFilter';
import Header from '@/components/molecules/Header';
import getAllCard from '@/api/card';
import Navbar from '@/components/molecules/Navbar';

export default async function page() {
  const searchOption = await getAllCard();

  return (
    <>
      <Header title="카드 등록" isFilterButton isPrevButton />
      <div className="w-full h-full relative">
        <ProfitFilter data={searchOption.data} />
        <PaginatedCardList listType="register" />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
