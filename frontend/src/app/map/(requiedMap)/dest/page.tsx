'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getShopData } from '@/app/api/map';

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
    const delay = 2000;
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
