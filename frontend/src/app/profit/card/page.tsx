'use client';

import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import PaginatedCardList from '../organisms/PaginatedCardList';
import ProfitFilter from '../organisms/ProfitFilter';
import { getCardSearch } from '@/api/card';
import { filterOptionAtom } from '@/store/atoms/header';

export default function Page() {
  const [filterOption, setFilterOption] = useAtom(filterOptionAtom);
  const [data, setData] = useState({
    typeList: [],
    cardList: [],
    companyList: [],
  });
  useEffect(() => {
    (async () => {
      const response = await getCardSearch({
        company: filterOption.company,
        type: filterOption.type,
        cardName: filterOption.cardName,
      });
      setData(response.data);
    })();
  }, [filterOption, setFilterOption]);

  return (
    <div className="w-full h-full relative">
      <ProfitFilter data={data} />
      <PaginatedCardList data={data} />
    </div>
  );
}
