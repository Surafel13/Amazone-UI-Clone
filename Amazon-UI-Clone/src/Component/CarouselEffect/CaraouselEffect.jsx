import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'


import img1 from '../../Img/CarasouleImg/61BKVkj5+uL._SX3000_.jpg';
import img2 from '../../Img/CarasouleImg/61Yx5-N155L._SX3000_.jpg';
import img3 from '../../Img/CarasouleImg/71qcoYgEhzL._SX3000_.jpg';
import img4 from '../../Img/CarasouleImg/81hIlE5xocL._SX3000_.jpg';
import img5 from '../../Img/CarasouleImg/619geyiQI5L._SX3000_.jpg';

function CaraouselEffect() {
    return (
        <section className="Carousel-Container">
            <Carousel
                indicators={false}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon custom-icon" />}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon custom-icon" />}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100 fade-bottom"
                        src={img1}
                        alt="Amazon Hero Slide 1"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 fade-bottom"
                        src={img2}
                        alt="Amazon Hero Slide 2"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 fade-bottom"
                        src={img3}
                        alt="Amazon Hero Slide 3"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 fade-bottom"
                        src={img4}
                        alt="Amazon Hero Slide 4"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 fade-bottom"
                        src={img5}
                        alt="Amazon Hero Slide 5"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default CaraouselEffect;
