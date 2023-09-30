import CardEmptyRegistButton from '../../atoms/CardEmptyRegistButton';
import ProfitFilter from '../../organisms/ProfitFilter';
import MyCardContainer from '../../organisms/MyCardContainer';
import getAllCard, { getMyCard } from '@/api/card';
import Header from '@/components/molecules/Header';
import Navbar from '@/components/molecules/Navbar';

export default async function Page() {
  const myCard = await getMyCard();
  const searchOption = await getAllCard();

  return (
    <>
      <Header title="내 카드 조회" isFilterButton isPrevButton />
      <div className="w-full h-full relative flex justify-center items-center flex-col">
        <ProfitFilter data={searchOption.data} />
        {(() => {
          if (myCard.data.cardList.length === 0) {
            return <CardEmptyRegistButton />;
          }
          if (myCard.data.cardList.length > 0) {
            return <MyCardContainer myCard={myCard} />;
          }
          return <div>네트워크 에러!</div>;
        })()}
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </>
  );
}
