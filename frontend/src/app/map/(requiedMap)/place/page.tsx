/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { FormEvent, useState, useRef, useEffect } from 'react';
import { useAtom } from 'jotai';
import SearchBox from '../../molecules/FunctionalSearchBox';
import searchResultAtom from '@/store/atoms/searchResultAtom';
import curLocAtom from '@/store/atoms/curLocAtom';
import { getSearchedPlace, getLogoImage, getDirection } from '@/api/map';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function Page() {
  const [searchResult, setSearchResult] = useAtom(searchResultAtom);
  const [curLoc, setCurLoc] = useAtom(curLocAtom);
  const [shopLocs, setShopLocs] = useState([])
  const [shopLogo, setShopLogo] = useState([])
  const [selectedShop, setSelectedShop] = useState(null);

  /**
   * 검색어 클릭 시 가맹점 정보 불러오기
   */
  const ResultClickEvent = async (result: string) => {
    try {
      const data = await getSearchedPlace(result);
      // const logo = await getLogoImage();
      const imthinking = await getDirection(curLoc);
      console.log(imthinking)
      setShopLocs(data.data.shopList)
      // setShopLogo(logo)
    } catch (error) {
      console.error("가맹점 정보 불러오기 실패", error);
    }
  };

  const handleMarkerClick = (shop: any) => {
    console.log('Marker Click Event')
    setSelectedShop(shop);
  };

  console.log(curLoc)

  return (
    <>
      <Map
        center={{
          lat: 37.50135,
          lng: 127.0397,
        }} // 멀티캠퍼스 역삼 주소 (기본 주소)
        style={{
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
          position: "absolute"
        }}
        level={4}
      >
        <div className="mt-7 flex justify-center">
          <SearchBox
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              throw new Error('검색 과정에서 오류가 발생하였습니다.');
            }}
          />
        </div>

        <div className="bg-Annotations rounded-[10px] w-10/12 mx-auto mt-2 font-suit text-xl">
          {searchResult.map((result, index) => (
            <div
              key={index}
              className="px-2 py-2 cursor-pointer"
              onClick={() => { ResultClickEvent(result) }}>{result}</div>
          ))}
        </div>

        {/* 인포 메시지 */}
        {shopLocs.map((shopLoc, index) => (
          <MapMarker
            key={index}
            position={{ lat: shopLoc.latitude, lng: shopLoc.longitude }}
            onClick={() => handleMarkerClick(shopLoc)} // 마커 클릭 이벤트 처리
          />
        ))}

      </Map>
      {/* 선택된 가게의 상세 정보 하단 표시 */}

      {selectedShop && (
        <div className="w-full h-[200px] absolute inset-x-0 bottom-0 z-0 bg-white rounded-tl-[22px] rounded-tr-[22px] shadow">
            {/* <img src={shopLogo[0].image} className="w-[60px]" /> */}
          <div className="flex flex-row">
          <div className="align-bottom text-black text-base font-bold font-['SUIT']">
            {selectedShop.shopName}
            {selectedShop.shopLocation}
          </div>
          <div className="align-bottom text-Secondary text-xs font-light font-['SUIT']">
            {selectedShop.category}
          </div>
          </div>
          <p className="text-black text-xs font-light font-['SUIT']">{selectedShop.address}</p>
        </div>
      )}

    </>
  );
}
