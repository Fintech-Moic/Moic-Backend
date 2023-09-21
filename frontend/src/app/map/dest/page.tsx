'use client';

import React, { useState } from 'react';

export async function getSearchData() {
  const res = await fetch(`https://moic.site/api/v1/autocomplete?word=안경`, {
    method: 'POST',
  })
  const data = await res.json()

  return data;
}

export async function listOfSearch() {

  const posts = await getSearchData();
  console.log('SEARCH DATA CHECK ===>', posts)

  return posts
}

export default function searchShop() {

  let [inputValue, setInputValue] = useState('');
  const onChangeInput = (e: any) => {
    inputValue = e.target.value
    console.log(inputValue)
  }

  return (
    <div>
      <input
        id="inputValue"
        name="inputValue"
        placeholder="검색어를 입력하세요"
        onChange={onChangeInput}
      />
    </div>
  )
}

// export default async function ListOfSearch() {
//   const posts = await getSearchData();
//   console.log('SEARCH DATA CHECK ===>', posts)

//   return (
//     <div>
//       {/* <div>////////////////검색창 들어갈 자리/////////////</div> */}
//       {/* {
//         posts.map((post, i)=>
//           <div>
//           {post}
//           </div>
//         )
//       } */}
//     </div>
//   )
// }