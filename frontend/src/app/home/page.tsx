'use client';

import { useState, useEffect, useRef } from 'react';
import HomeBoxButtons from './organisms/HomeBoxButtons';
import HomeContents from './organisms/HomeContents';
import mainMap from '@/../public/assets/images/mainMap.svg';
import mainRoute from '@/../public/assets/images/mainRoute.svg';
import mainGiftCard from '@/../public/assets/images/mainGiftCard.svg';
import mainProfit from '@/../public/assets/images/mainProfit.svg';

import { signOutApi } from '@/api/auth';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const dropdownItems = [
    { name: '계정 관리', link: '/myPage' },
    { name: '북마크 관리', link: '/myPage/bookMark' },
    { name: '문의사항', link: '/myPage/voc' },
  ];
  const boxs = [
    {
      going: 'map/dest',
      imgSrc: mainMap,
      title: '지도 확인하기',
      sentence: '지도에서 혜택 지역을 찾아볼까요?',
    },
    {
      going: '',
      imgSrc: mainRoute,
      title: '경로 추천받기',
      sentence: '오늘은 어디갈까? 저희가 추천해드릴게요!',
    },
    {
      going: 'profit/giftCard/myGiftCard',
      imgSrc: mainGiftCard,
      title: '기프티콘',
      sentence: '기프티콘을 등록하고 관리해보세요',
    },
    {
      going: 'profit/card',
      imgSrc: mainProfit,
      title: '혜택 확인하기',
      sentence: '사용하는 카드를 등록하고 혜택을 확인해보세요!',
    },
  ];

  const signOut = async () => {
    const result = await signOutApi();
    if (result !== null) alert('로그아웃 성공');
    else alert('로그아웃 실패');
  };
  return (
    <div className="flex flex-col w-80">
      <HomeContents
        isOpen={isOpen}
        onClick={toggleDropdown}
        items={dropdownItems}
        name="이의찬"
        signOut={signOut}
      />
      <HomeBoxButtons boxs={boxs} />
    </div>
  );
}
