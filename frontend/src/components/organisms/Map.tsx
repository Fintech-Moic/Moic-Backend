'use client';

import { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useSetAtom } from 'jotai';
import curLocAtom from '@/store/atoms/curLocAtom';

export default function KakaoMap() {
  const setCurLoc = useSetAtom(curLocAtom);
  const [state, setState] = useState({
    center: {
      lat: 37.50135,
      lng: 127.0397,
    } as any,
    errMsg: null as string | null,
    isLoading: true,
  });

  /**
   * 현 위치 찾기
   */
  // useEffect(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         setState((prev) => ({
  //           ...prev,
  //           center: {
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           },
  //           isLoading: false,
  //         }));
  //       },
  //       (err) => {
  //         setState((prev) => ({
  //           ...prev,
  //           errMsg: err.message,
  //           isLoading: false,
  //         }));
  //       }
  //     );
  //   } else {
  //     setState((prev) => ({
  //       ...prev,
  //       errMsg: '일시적인 오류로 내 위치 찾기 기능을 사용할 수 없습니다',
  //       isLoading: false,
  //     }));
  //   }
  // }, []);

  const { error }: any = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_APPKEY!,
  });

  useEffect(() => {
    setCurLoc(state.center);
  }, [state.center, setCurLoc]);

  if (error) return <div>Error</div>;

  return (
    <Map
      center={state.center}
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      {!state.isLoading && (
        <MapMarker position={state.center}>
          <div className="p-1 text-black">
            {state.errMsg ? state.errMsg : '내 위치'}
          </div>
        </MapMarker>
      )}
    </Map>
  );
}
