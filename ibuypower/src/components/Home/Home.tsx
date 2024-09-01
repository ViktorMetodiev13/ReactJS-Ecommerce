import './home.css';
import 'swiper/css';
import 'swiper/css/navigation';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import { SlideOne } from './slides/SlideOne';
import { SlideTwo } from './slides/SlideTwo';

export const Home: React.FC = () => {
    return (
        <div className="home">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><SlideOne /></SwiperSlide>
                <SwiperSlide><SlideTwo /></SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    )
}