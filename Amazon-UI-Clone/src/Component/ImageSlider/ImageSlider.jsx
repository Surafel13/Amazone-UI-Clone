import React, { useState } from 'react';
import Slider from "react-slick";
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

    return (
        <div className="slider-container1 mx-3"> 
                <div>
                    <h3>Top Sellers in Books for you</h3>
                </div>
                <div className='d-flex BookContainer'>
                    {images.map((img, index) => (
                    <div key={index} className='imgWrapper'>
                        <a href="#"><img src={img} alt={`img${index}`} /></a>
                    </div>
                ))}
                </div>               
        </div>
    );
}

export default ImageSlider;
