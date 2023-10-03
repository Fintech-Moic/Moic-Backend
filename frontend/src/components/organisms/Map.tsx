'use client';

import { useEffect, useState } from "react";
import { useKakaoLoader } from "react-kakao-maps-sdk"
import { useAtom } from 'jotai';
import curLocAtom from "@/store/atoms/curLocAtom";

export default function KakaoMap() {
  const { error }: any = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_APPKEY!
  })
  if (error) return <div>Error</div>

  const [state, setState] = useState({

    center: {
      lat: 37.50135,
      lng: 127.0397,
    },
    errMsg: null,
    isLoading: true,
  })

  const [curLoc, setCurLoc] = useAtom(curLocAtom);

  interface curLoc {
    lat: number,
    lng: number
  }

  /**
   * 현 위치 찾기
   */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "일시적인 오류로 내 위치 찾기 기능을 사용할 수 없습니다",
        isLoading: false,
      }))
    }
  }, [])

  setCurLoc(state.center)

  return (
    <>
      {/* <Map
        center={state.center}
        style={{ width: "100%", height: "100%" }}
        level={3}>

        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div className="p-1 text-black">
              {state.errMsg ? state.errMsg : "내 위치"}
            </div>
          </MapMarker>
        )}
      </Map> */}
    </>
  )
}