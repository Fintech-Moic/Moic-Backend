'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getShopData } from '@/api/map';

/**
 * 검색어 입력 및 검색 결과 출력 함수
 */
export default function SearchShop() {

  const params = useParams();

  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  let debounceTimer;

  const onChangeInput = (e : string | number) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    clearTimeout(debounceTimer)
  };

  /** 가맹점 데이터 API 호출 함수
   * @param {String | Number} value 검색어
   */
  const listOfShop = async (value : string | number) => {
    const posts = await getShopData(value);
    console.log('SEARCH DATA CHECK ===>', posts);
    setSearchResult(posts);
  };

  /** Debounce -> 검색 타이머 초기화 -> 기존 검색어 요청 대기 상태 초기화
   */
  useEffect(() => {
    const delay = 1000;
    const timerId = setTimeout(() => {
      if (inputValue) {
        listOfShop(inputValue);
      } else {
        setSearchResult([]);
      }
    }, delay);
    return () => clearTimeout(timerId);
  }, [inputValue]);

  return (
    <div>
      <input
        id="inputValue"
        name="inputValue"
        placeholder="검색어를 입력하세요"
        onChange={onChangeInput}
        value={inputValue}
      />
      <div>
        {/* 검색 결과 출력 */}
        {searchResult.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
}



// {
//   "message": "내 카드 목록 조회",
//   "data": {
//       "cardList": [
//           {
//               "id": "5c3d84ec-58f7-11ee-bc1a-0242ac110003",
//               "company": "국민",
//               "type": "신용",
//               "name": "톡톡 with카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d84ec-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d876c-58f7-11ee-bc1a-0242ac110003",
//               "company": "국민",
//               "type": "신용",
//               "name": "청춘대로 1코노미 카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d876c-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d88ae-58f7-11ee-bc1a-0242ac110003",
//               "company": "국민",
//               "type": "체크",
//               "name": "우리동네 체크카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d88ae-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8924-58f7-11ee-bc1a-0242ac110003",
//               "company": "국민",
//               "type": "신용",
//               "name": "My WE:SH 카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8924-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d898b-58f7-11ee-bc1a-0242ac110003",
//               "company": "국민",
//               "type": "체크",
//               "name": "총무 체크카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d898b-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d89f8-58f7-11ee-bc1a-0242ac110003",
//               "company": "신한",
//               "type": "체크",
//               "name": "Way 체크(최고심)카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d89f8-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8a55-58f7-11ee-bc1a-0242ac110003",
//               "company": "신한",
//               "type": "신용",
//               "name": "Everywhere카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8a55-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8aae-58f7-11ee-bc1a-0242ac110003",
//               "company": "신한",
//               "type": "체크",
//               "name": "Pick E 체크카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8aae-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8b14-58f7-11ee-bc1a-0242ac110003",
//               "company": "하나",
//               "type": "신용",
//               "name": "#MY WAY(샵 마이웨이) 카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8b14-58f7-11ee-bc1a-0242ac110003.gif"
//           },
//           {
//               "id": "5c3d8b70-58f7-11ee-bc1a-0242ac110003",
//               "company": "하나",
//               "type": "신용",
//               "name": "MULTI Any 모바일카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8b70-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8bc6-58f7-11ee-bc1a-0242ac110003",
//               "company": "하나",
//               "type": "체크",
//               "name": "T1 Young Hana 체크카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8bc6-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8c5d-58f7-11ee-bc1a-0242ac110003",
//               "company": "현대",
//               "type": "신용",
//               "name": "ZERO Edition2(할인형) 카",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8c5d-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8cb2-58f7-11ee-bc1a-0242ac110003",
//               "company": "현대",
//               "type": "신용",
//               "name": "Z family 카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8cb2-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8d0b-58f7-11ee-bc1a-0242ac110003",
//               "company": "카카오뱅크",
//               "type": "신용",
//               "name": "카카오뱅크 삼성카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8d0b-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8d62-58f7-11ee-bc1a-0242ac110003",
//               "company": "카카오뱅크",
//               "type": "체크",
//               "name": "프렌즈 체크카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8d62-58f7-11ee-bc1a-0242ac110003.png"
//           },
//           {
//               "id": "5c3d8dc4-58f7-11ee-bc1a-0242ac110003",
//               "company": "토스뱅크",
//               "type": "체크",
//               "name": "브랜드형 체크카드",
//               "cardImage": "https://moicbucket.s3.ap-northeast-2.amazonaws.com/image/card/5c3d8dc4-58f7-11ee-bc1a-0242ac110003.png"
//           }
//       ]
//   }
// }