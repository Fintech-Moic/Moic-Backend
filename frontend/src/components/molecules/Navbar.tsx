'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import IconButton from '../atoms/IconButton';
import map from '@/../public/assets/images/map.svg';
import mapOn from '@/../public/assets/images/mapOn.svg';
import home from '@/../public/assets/images/home.svg';
import homeOn from '@/../public/assets/images/homeOn.svg';
import card from '@/../public/assets/images/card.svg';
import cardOn from '@/../public/assets/images/cardOn.svg';
import gifticon from '@/../public/assets/images/gifticon.svg';
import gifticonOn from '@/../public/assets/images/gifticonOn.svg';

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const navButtonClick = (target: string) => {
    router.push(target);
  };
  return (
    <div className="h-20 w-full max-w-xl flex justify-evenly items-center">
      <IconButton
        type="button"
        width="w-6"
        height="h-6"
        src={pathname === '/map/dest' ? mapOn : map}
        alt="map"
        onClick={() => navButtonClick('/map/place')}
      />
      <IconButton
        type="button"
        width="w-6"
        height="h-6"
        src={pathname === '/home' ? homeOn : home}
        alt="home"
        onClick={() => navButtonClick('/home')}
      />
      <IconButton
        type="button"
        width="w-6"
        height="h-6"
        src={pathname === '/profit/card' ? cardOn : card}
        alt="card"
        onClick={() => navButtonClick('/profit/card')}
      />
      <IconButton
        type="button"
        width="w-6"
        height="h-6"
        src={pathname === '/profit/giftCard/myGiftCard' ? gifticonOn : gifticon}
        alt="gifticon"
        onClick={() => navButtonClick('/profit/giftCard/myGiftCard')}
      />
    </div>
  );
}
export default Navbar;
