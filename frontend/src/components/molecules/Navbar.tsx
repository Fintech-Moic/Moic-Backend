import React from 'react';
import { atom, useAtom } from 'jotai';
import NavbarButton from '@/components/atoms/NavbarButton';
import map from '@/../public/assets/images/map.svg';
import mapOn from '@/../public/assets/images/mapOn.svg';
import home from '@/../public/assets/images/home.svg';
import homeOn from '@/../public/assets/images/homeOn.svg';
import card from '@/../public/assets/images/card.svg';
import cardOn from '@/../public/assets/images/cardOn.svg';
import gifticon from '@/../public/assets/images/gifticon.svg';
import gifticonOn from '@/../public/assets/images/gifticonOn.svg';

const selectedNavAtom = atom('');

function Navbar() {
  const [selectedNav, setSelectedNav] = useAtom(selectedNavAtom);
  const mapButtonClick = () => {
    setSelectedNav('map');
  };
  const homeButtonClick = () => {
    setSelectedNav('home');
  };
  const cardButtonClick = () => {
    setSelectedNav('card');
  };
  const gifticonButtonClick = () => {
    setSelectedNav('gifticon');
  };

  return (
    <div className="h-20 w-full flex justify-evenly">
      <NavbarButton
        src={selectedNav === 'map' ? mapOn : map}
        alt="map"
        onClick={mapButtonClick}
      />
      <NavbarButton
        src={selectedNav === 'home' ? homeOn : home}
        alt="home"
        onClick={homeButtonClick}
      />
      <NavbarButton
        src={selectedNav === 'card' ? cardOn : card}
        alt="card"
        onClick={cardButtonClick}
      />
      <NavbarButton
        src={selectedNav === 'gifticon' ? gifticonOn : gifticon}
        alt="gifticon"
        onClick={gifticonButtonClick}
      />
    </div>
  );
}
export default Navbar;
