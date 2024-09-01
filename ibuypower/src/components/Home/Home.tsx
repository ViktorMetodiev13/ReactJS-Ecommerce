import './home.css';
import 'swiper/css';
import 'swiper/css/navigation';

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import { SlideThree } from './slides/SlideThree';
import { SlideTwo } from './slides/SlideTwo';
import { SlideOne } from './slides/SlideOne';
import { SlideFour } from './slides/SlideFour';
import { SlideFive } from './slides/SlideFive';
import { SlideSix } from './slides/SlideSix';
import { SlideSeven } from './slides/SlideSeve';
import { SlideEight } from './slides/SlideEight';
import { SlideNine } from './slides/SlideNine';

export const Home: React.FC = () => {
    return (
        <div className="home">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><SlideOne /></SwiperSlide>
                <SwiperSlide><SlideTwo /></SwiperSlide>
                <SwiperSlide><SlideThree /></SwiperSlide>
                <SwiperSlide><SlideFour /></SwiperSlide>
                <SwiperSlide><SlideFive /></SwiperSlide>
                <SwiperSlide><SlideSix /></SwiperSlide>
                <SwiperSlide><SlideSeven /></SwiperSlide>
                <SwiperSlide><SlideEight /></SwiperSlide>
                <SwiperSlide><SlideNine /></SwiperSlide>
            </Swiper>
        </div>
    )
}