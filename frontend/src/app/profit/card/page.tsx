import { Suspense } from 'react';
import PaginatedCardList from '../organisms/PaginatedCardList';
import ProfitFilter from '../organisms/ProfitFilter';
import getAllCard from '@/api/card';

export default async function Page() {
  const searchOption = await getAllCard();

  return (
    <Suspense fallback={<div>감동의 로딩</div>}>
      <ProfitFilter data={searchOption.data} />
      <PaginatedCardList listType="read" />
    </Suspense>
  );
}
