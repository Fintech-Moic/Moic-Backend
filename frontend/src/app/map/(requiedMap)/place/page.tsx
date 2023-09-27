'use client';

import React, { FormEvent, useState } from 'react';
import SearchBox from '../../molecules/FunctionalSearchBox';

export default function Page() {

  return (
    <div className="flex justify-center">
      <SearchBox onSubmit={function (event: FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.');
      }}
      />
    </div>
  )
}









/* Card Carousel Test Code for Suhwan */
// import CardCarousel from '@/components/atoms/CardCarousel'
// import SearchBox from '../../molecules/FunctionalSearchBox';
// import { getMyCard } from '@/api/card';

// export default async function Page() {
//   const MyCardInfo = await getMyCard();
//   const data : {
//     id : string,
//     company : string,
//     type : string,
//     name : string,
//     cardImage : string
//    }[] = MyCardInfo.data.cardList

//   return (
//     <>
//     <SearchBox />
//     <div className="t1">place</div>
//     <CardCarousel data={data} />
//     </>
//   )
// }