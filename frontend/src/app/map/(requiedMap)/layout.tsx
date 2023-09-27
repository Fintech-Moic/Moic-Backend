'use client';

import Navbar from '@/components/molecules/Navbar';
import Map from "@/components/organisms/Map";
import React, { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function layout({ children }: { children: React.ReactNode }) {

  const mapScript = document.createElement("script");
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=services,clusterer,drawing`;
  document.head.appendChild(mapScript);

  useEffect(() => {
    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        // 지도 생성
        const mapContainer = document.getElementById('map'), // 지도 표시
          mapOption = {
            center: new window.kakao.maps.LatLng(37.501339, 127.039663), // 지도 중심 좌표
            level: 3  // 지도 확대 레벨
          };

        const map = new window.kakao.maps.Map(mapContainer, mapOption)
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

        // 결과값 마커로 표시
        const marker = new window.kakao.maps.Marker({
          map: map,
          position: markerPosition,
        });

        // 지도 중심 --> 결과값으로 받은 위치로 이동
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (

    <div className="flex flex-col justify-between h-screen">
      <div className="absolute z-50 w-full mt-7">{children}</div>
      <div id="map" style={{ width: '100vw', height: '100vh' }}>
        <Map />
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </div>
  );
}
