/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import React, { useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [mapScript, setMapScript] = useState<HTMLScriptElement>();

  useEffect(() => {

    /* curMapScript */
    const curMapScript = document.createElement('script');
    curMapScript.async = true;
    curMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
    setMapScript(curMapScript);
    document.head.appendChild(curMapScript);

    return () => {
      /* Remove curMapScript */
      if (curMapScript.parentNode) {
        curMapScript.parentNode.removeChild(curMapScript);
      }
    };
  }, []);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        // 지도 생성
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.501339, 127.039663), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 결과값을 마커로 표시
        const marker = new window.kakao.maps.Marker({
          map,
          position: markerPosition,
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동
        marker.setMap(map);
      });
    };

    if (mapScript) {
      /* LoadKakaoMap Event Listener */
      mapScript.addEventListener('load', onLoadKakaoMap);
    }

    return () => {
      if (mapScript) {
        /* Remove LoadKakaoMap Event Listener */
        mapScript.removeEventListener('load', onLoadKakaoMap);
      }
    };
  }, [mapScript]);

  return <div id="map" />;
}
