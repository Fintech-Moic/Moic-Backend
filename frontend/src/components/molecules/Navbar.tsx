'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

import NavbarButton from '@/components/atoms/NavbarButton';
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
    router.push(`${target}`);
  };
  return (
    <div className="h-20 w-full max-w-xl flex justify-evenly items-center">
      <NavbarButton
        src={pathname === '/map/dest' ? mapOn : map}
        alt="map"
        onClick={() => navButtonClick('/map/dest')}
      />
      <NavbarButton
        src={pathname === '/home' ? homeOn : home}
        alt="home"
        onClick={() => navButtonClick('/home')}
      />
      <NavbarButton
        src={pathname === '/profit/card' ? cardOn : card}
        alt="card"
        onClick={() => navButtonClick('/profit/card')}
      />
      <NavbarButton
        src={pathname === '/profit/gifticon' ? gifticonOn : gifticon}
        alt="gifticon"
        onClick={() => navButtonClick('/profit/gifticon')}
      />
    </div>
  );
}
export default Navbar;
