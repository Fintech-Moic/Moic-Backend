/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import React, { FormEvent, useState } from 'react';
import { useAtom } from 'jotai';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import SearchBox from '../../molecules/FunctionalSearchBox';
import searchResultAtom from '@/store/atoms/searchResultAtom';
import curLocAtom from '@/store/atoms/curLocAtom';
// import { getSearchedPlace, getLogoImage, getDirection } from '@/api/map';
import { getSearchedPlace, getDirection } from '@/api/map';

export default function Page() {
  const [searchResult, setSearchResult] = useAtom(searchResultAtom);
  const [curLoc, setCurLoc] = useAtom<any>(curLocAtom);
  const [shopLocs, setShopLocs] = useState([]);
  // const [shopLogo, setShopLogo] = useState([])
  const [selectedShop, setSelectedShop] = useState<any>(null);

  /**
   * 검색어 클릭 시 가맹점 정보 불러오기
   */
  const ResultClickEvent = async (result: string) => {
    try {
      const data = await getSearchedPlace(result);
      // const logo = await getLogoImage(); 로고 API 사용 여부 확정 후 주석 해제
      setShopLocs(data.data.shopList);
      // setShopLogo(logo) 로고 API 사용 여부 확정 후 주석 해제
    } catch (error) {
      console.error('가맹점 정보 불러오기 실패', error);
    }
  };

  const handleMarkerClick = async (shop: any) => {
    setSelectedShop(shop);

    try {
      const str = { lat: curLoc.lat, lng: curLoc.lng };
      const fin = { lat: shop.latitude, lng: shop.longitude };
      const data = await getDirection(str, fin);
      console.log(data);
    } catch (error) {
      console.error('경로 정보 불러오기 실패', error);
    }
  };

  return (
    <>
      <Map
        center={{
          lat: 37.50135,
          lng: 127.0397,
        }} // 멀티캠퍼스 역삼 주소 (기본 주소)
        style={{
          width: '100vw',
          height: '100vh',
          zIndex: '-1',
          position: 'absolute',
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
              key={result}
              className="px-2 py-2 cursor-pointer"
              onClick={() => {
                ResultClickEvent(result);
              }}
              role="button"
              tabIndex={0}
            >
              {result}
            </div>
          ))}
        </div>

        {/* 인포 메시지 */}
        {shopLocs.map((loc: any, index) => (
          <MapMarker
            key={loc}
            position={{ lat: loc.latitude, lng: loc.longitude }}
            onClick={() => handleMarkerClick(loc)} // 마커 클릭 이벤트 처리
          />
        ))}
      </Map>
      {/* 선택된 가게의 상세 정보 하단 표시 */}

      {selectedShop && (
        <div className="w-full h-[200px] absolute inset-x-0 bottom-0 z-0 bg-white rounded-tl-[22px] rounded-tr-[22px] shadow">
          <div className="flex flex-row justify-center mt-7">
            <img
              alt="Logo"
              src="https://logodownload.org/wp-content/uploads/2017/10/Starbucks-logo.png"
              className="w-[60px]"
            />
            {/* <img src={shopLogo[0].image} className="w-[60px]" />  로고 API 사용 여부 확정 후 주석 해제 */}

            <div className="flex flex-col ml-5">
              <div>
                <span className="align-bottom text-black text-base font-bold font-['SUIT']">
                  {selectedShop.shopName}
                </span>
                <span className="ml-1 align-bottom text-black text-base font-bold font-['SUIT']">
                  {selectedShop.shopLocation}
                </span>
                <span className="ml-1 align-middle text-Secondary text-xs font-light font-['SUIT']">
                  {selectedShop.category}
                </span>
              </div>

              <div className="flex flex-row mt-0.5">
                <div className="bg-g6 w-7 h-[16px] rounded-[5px] text-center text-white text-[8px] font-semibold font-['SUIT']">
                  혜택
                </div>
                <span className="ml-1 text-g6 text-xs font-semibold font-['SUIT']">
                  강남구 불주먹님을 위한 혜택 보러 가기
                </span>
              </div>
              <div className="mt-1 text-black text-xs font-light font-['SUIT']">
                {selectedShop.address}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
