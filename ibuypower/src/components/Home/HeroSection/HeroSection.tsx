import './heroSection.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { SlideOne } from './slides/SlideOne';
import { SlideTwo } from './slides/SlideTwo';
import { SlideThree } from './slides/SlideThree';
import { SlideFour } from './slides/SlideFour';
import { SlideFive } from './slides/SlideFive';
import { SlideSix } from './slides/SlideSix';
import { SlideSeven } from "./slides/SlideSeven";
import { SlideEight } from './slides/SlideEight';
import { SlideNine } from './slides/SlideNine';


export const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
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