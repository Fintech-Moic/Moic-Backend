/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useSetAtom } from 'jotai';
import CarouselGiftItem from '../atoms/CarouselGiftItem';
import BlackLeftArrowIcon from '@/../public/assets/BlackLeftArrowIcon.svg';
import BlackRightArrowIcon from '@/../public/assets/BlackRightArrowIcon.svg';
import { giftDeleteModalAtom } from '@/store/atoms/modal';
import CardRegist from '@/../public/CardRegist.png';
import GiftCard from '@/types/giftCard';

interface ProfitGiftCarouselProps {
  [x: string]: any;
  data: GiftCard[];
  canDelete: boolean;
  onClickNext: () => void;
  onClickPrev: () => void;
}
function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      src={BlackRightArrowIcon}
      alt="오른쪽화살표"
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <Image
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      src={BlackLeftArrowIcon}
      alt="왼쪽화살표"
    />
  );
}

export default function ProfitGiftCarousel({
  data,
  canDelete,
  onClickNext,
  onClickPrev,
}: ProfitGiftCarouselProps) {
  const router = useRouter();
  const setOpenGiftDeleteModal = useSetAtom(giftDeleteModalAtom);
  const settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    beforeChange: (prevIdx: number, newIdx: number) => {
      const diff = newIdx - prevIdx;
      if (diff === 1) onClickNext();
      else if (diff - 1) onClickPrev();
    },
  };

  const handleClickRegist = (e: any) => {
    e.preventDefault();
    router.push('/profit/giftCard/regist');
  };

  const handleClickGift = (id: string) => {
    router.push(`/profit/giftCard/detail/${id}`);
  };
  const handleClickGiftDelete = (props: GiftCard) => {
    setOpenGiftDeleteModal((prev) => ({
      ...prev,
      isOpen: true,
      deleteGiftInfo: { ...props },
    }));
  };
  return (
    <div className="w-80 h-32 cursor-pointer [&_.slick-slide]:w-20 [&_.slick-slide]:h-32 [&_.slick-slide]:relative">
      <Slider {...settings}>
        <h3>
          <button
            type="button"
            className="w-20 h-32 border-solid border-2 border-white shadow-md rounded-[10px] transform"
            onClick={handleClickRegist}
          >
            <Image
              width="80"
              height="128"
              src={CardRegist}
              alt="기프티콘등록"
            />
          </button>
          <Image
            className="w-20 h-32 border-solid border-2 border-white shadow-md rounded-[10px] transform"
            width="80"
            height="128"
            src={CardRegist}
            onClick={handleClickRegist}
            alt="기프티콘등록"
          />
        </h3>
        {data.map(({ id, imageUrl, dueDate }: GiftCard) => (
          <CarouselGiftItem
            key={`CarouselGiftItem_${imageUrl}`}
            canDelete={canDelete}
            giftImage={imageUrl}
            onClick={() => handleClickGift(id)}
            onClickDelete={() =>
              handleClickGiftDelete({
                id,
                imageUrl,
                dueDate,
              })
            }
          />
        ))}
      </Slider>
    </div>
  );
}
