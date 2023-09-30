'use client';

import React, { FormEvent } from 'react';
import { useAtom } from 'jotai';
import SearchBox from '../../molecules/FunctionalSearchBox';
import searchResultAtom from '@/store/atoms/searchResultAtom';

export default function Page() {
  const [searchResult, setSearchResult] = useAtom(searchResultAtom);

  return (
    <>
      <div className="flex justify-center">
        <SearchBox
          onSubmit={function (event: FormEvent<HTMLFormElement>): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      {/* 검색 결과 출력 */}
      <div className="bg-Annotations rounded-[10px] w-10/12 mx-auto mt-2 font-suit text-xl">
        {searchResult.map((result, index) => (
          <div className="px-2 py-2" key={index}>
            색깔 바꿀 거에용 {result}
          </div>
        ))}
      </div>
    </>
  );
}
