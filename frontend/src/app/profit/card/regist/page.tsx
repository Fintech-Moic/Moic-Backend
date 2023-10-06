import PaginatedCardList from '../../organisms/PaginatedCardList';
import ProfitFilter from '../../organisms/ProfitFilter';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default async function page() {
  return (
    <>
      <Header title="카드 등록" isFilterButton isPrevButton />
      <div className="w-full h-full relative">
        <ProfitFilter />
        <PaginatedCardList listType="regist" />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
