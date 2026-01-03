import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';
import img1 from './../../Img/BookImages/61abxAC93YL._AC_SY200_ (1).jpg';
import img2 from './../../Img/BookImages/61CdzdGU-NL._AC_SY200_.jpg';
import img3 from './../../Img/BookImages/61f0qbyf-iL._AC_SY200_.jpg';
import img4 from './../../Img/BookImages/51x1zc1N4fL._AC_SY200_.jpg';
import img5 from './../../Img/BookImages/61G4KXZIDFL._AC_SY200_.jpg';
import img6 from './../../Img/BookImages/61MCzox9eNL._AC_SY200_.jpg';
import img7 from './../../Img/BookImages/61PVlprbQlL._AC_SY200_.jpg';
import img8 from './../../Img/BookImages/61u8Cg9IYfL._AC_SY200_.jpg';
import img9 from './../../Img/BookImages/61y0JJdtw5S._AC_SY200_.jpg';
import img10 from './../../Img/BookImages/71+QLkDEdyL._AC_SY200_.jpg';

function ImageSlider() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="slider-container1">
      <div className="slider-inner-wrapper">
        <h3 className="slider-title">Top Sellers in Books for you</h3>

        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <div className="text-center" >
                <a href="#" className="block hover:opacity-90 transition">
                  <img
                    src={img}
                    alt={`Book ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow mx-auto"
                    style={{ maxHeight: '280px', objectFit: 'contain' }}
                  />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;