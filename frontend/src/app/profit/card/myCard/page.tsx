import CardEmptyRegistButton from '../../atoms/CardEmptyRegistButton';
import ProfitFilter from '../../organisms/ProfitFilter';
import getAllCard, { getMyCard } from '@/api/card';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default async function Page() {
  const { data } = await getMyCard();
  const searchOption = await getAllCard();
  data.cardList = [];

  // 빈 카드 페이지
  if (data.cardList.length === 0) {
    return (
      <>
        <Header title="카드 등록" isFilterButton isPrevButton />
        <div className="w-full h-full relative flex justify-center items-center flex-col">
          <ProfitFilter data={searchOption.data} />
          <CardEmptyRegistButton />
        </div>
        <div className="flex justify-center">
          <Navbar />
        </div>
      </>
    );
  }

  return <div>추가예정</div>;
}
