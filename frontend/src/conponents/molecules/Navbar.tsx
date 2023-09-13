import React, { useState } from 'react';
import Image from 'next/image';
import map from '../../../public/assets/map.svg';
import mapOn from '../../../public/assets/mapOn.svg';
import home from '../../../public/assets/home.svg';
import homeOn from '../../../public/assets/homeOn.svg';
import card from '../../../public/assets/card.svg';
import cardOn from '../../../public/assets/cardOn.svg';
import gifticon from '../../../public/assets/gifticon.svg';
import gifticonOn from '../../../public/assets/gifticonOn.svg';

interface NavbarProps {
  choice?: 'map' | 'home' | 'card' | 'gifticon';
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
function Navbar({ choice = 'home', ...props }: NavbarProps) {
  const [isChoice, setIsChoice] = useState(choice);

  return (
    <div className="h-20 w-96 flex justify-between">
      <Image src={map} alt="map" className="w-6 h-6" />
      <Image src={home} alt="home" className="w-6 h-6" />
      <Image src={card} alt="card" className="w-6 h-6" />
      <Image src={gifticon} alt="gifticon" className="w-6 h-6" />
    </div>
  );
}
export default Navbar;
