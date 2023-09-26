'use client';

import { useState } from 'react';
import GifticonRegistImage from '../organisms/GifticonRegistImage';
import GifticonRegistCheck from '../organisms/GifticonRegistCheck';

export default function GifticonRegist() {
  const [templateIdx, setTemplateIdx] = useState(0);
  const [gifticonResponse, setGifticonResponse] = useState<any>({});
  const gifticonTemplateArr = [
    <GifticonRegistImage
      setIdx={setTemplateIdx}
      setGifticonResponse={setGifticonResponse}
    />,
    <GifticonRegistCheck
      gifticonResponse={gifticonResponse}
      setGifticonResponse={setGifticonResponse}
    />,
  ];
  return gifticonTemplateArr[templateIdx];
}
