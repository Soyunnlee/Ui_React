// 2.

import React from "react";
import Slider from "react-slick";
// react-slick 설치
// https://velog.io/@juno7803/3%EB%B6%84-TIPS-React-Slick-%EC%89%BD%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

import { Slider } from "./Slider";

export function SlideContainer({ WebSite }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div>
        <Slider {...settings}>
            {WebSite.map((Website) => (
                <div>
                    <Slider Website={Website}/>  
                </div>
            ))}
        </Slider>
    </div>
  );
}
