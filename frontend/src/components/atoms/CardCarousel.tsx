'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function Page(props: (string | number)[]) {

  const settings = {
    dots: false,
    arrow: true,
    infinite: false,
    speed: 100,
    // slidesToShow: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px', // 카드 간 간격
    nextArrow: <SampleNextArrow />,
    preArrow: <SamplePrevArrow />
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    window.location.href = 'https://moic.site/profit/card/regist';
  }

  return (
    <div className="w-56 h-32 place-content-center ml-10 cursor-pointer">
      <Slider {...settings}>
        <div>
          <h3><img className="w-36 h-32 border-solid border-2 border-white shadow-md rounded-xl" src='/CardRegist.png' onClick={handleClick} /></h3>
        </div>
        {
          props.data.map((cardImageList: {
            cardImage: string,
            company: string,
            id: string,
            name: string,
            type: string
          }, i: number) =>
            <div>
              <h3 className="origin-top-left rotate-90 w-32"><img className="border-solid border-2 border-white shadow-md rounded-xl" src={cardImageList.cardImage} /></h3>
            </div>
          )
        }
      </Slider>
    </div>
  );
}
