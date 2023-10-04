import ProfitFilter from '../../organisms/ProfitFilter';
import MyCardContainer from '../../organisms/MyCardContainer';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default async function Page() {
  return (
    <>
      <Header title="내 카드 조회" isFilterButton isPrevButton />
      <div className="w-full h-full relative flex justify-center items-center flex-col">
        <ProfitFilter />
        <MyCardContainer />;
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
