'use client';

import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

export async function getSearchData() {

  const res = await fetch(`https://moic.site/api/v1/card/mycards?userId=test1234`, {
    method: 'GET',
  })
  const data = await res.json()
  return data;
}

export default function showCard() {

  let [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const posts = getSearchData();
    console.log('SEARCH DATA CHECK ===>', posts);
    setSearchResult(posts); // 결과를 상태에 저장
    console.log(posts)
  }, [])

  return (
    <Carousel>
      <div>
        <img src="/card_01.png" />
        <p className="legend">Legend1</p>
      </div>
      <div>
        <img src="/card_02.png" />
        <p className="legend">Legend1</p>
      </div>
      <div>
        <img src="/card_03.png" />
        <p className="legend">Legend1</p>
      </div>
    </Carousel>
  )
}
