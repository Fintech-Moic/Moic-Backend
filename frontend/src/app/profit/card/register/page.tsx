import PaginatedCardList from '../../organisms/PaginatedCardList';
import ProfitFilter from '../../organisms/ProfitFilter';
import getAllCard from '@/api/card';

export default async function page() {
  const searchOption = await getAllCard();

  return (
    <>
      <ProfitFilter data={searchOption.data} />
      <PaginatedCardList listType="register" />
    </>
  );
}
