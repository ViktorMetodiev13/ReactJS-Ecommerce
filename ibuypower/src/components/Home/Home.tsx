import './home.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { SlideThree } from './heroSlides/SlideThree';
import { SlideTwo } from './heroSlides/SlideTwo';
import { SlideOne } from './heroSlides/SlideOne';
import { SlideFour } from './heroSlides/SlideFour';
import { SlideFive } from './heroSlides/SlideFive';
import { SlideSix } from './heroSlides/SlideSix';
import { SlideSeven } from "./heroSlides/SlideSeven";
import { SlideEight } from './heroSlides/SlideEight';
import { SlideNine } from './heroSlides/SlideNine';

import pc1 from '../../assets/pcImages/RDY Lancool 005.avif';
import pc2 from '../../assets/pcImages/RDY Fractal DDOO2.avif';
import pc3 from '../../assets/pcImages/AMD Ryzen Ultra Gaming Daily Deal.avif';
import pc4 from '../../assets/pcImages/pc4.avif';

export const Home: React.FC = () => {
    return (
        <div className="home">
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


            <div className="featured-desktops">
                <h2 className="featured-desktops-title">Best Selling Gaming PC</h2>

                <div className="pc-list">
                    <div className="pc-list-item">
                        <img src={pc1} alt="" className='pc-item-cover-img' />

                        <div className="pc-information">
                            <h3 className="pc-information-title">RDY Lancool 005</h3>

                            <ul className="pc-information-list-specs" role='list'>
                                <li className="pc-information-list-specs-item">Windows 11 Home</li>
                                <li className="pc-information-list-specs-item">Intel® Core™ i9-14900KF CPU</li>
                                <li className="pc-information-list-specs-item">GeForce RTX 4080 SUPER - 16GB</li>
                                <li className="pc-information-list-specs-item">2TB M.2 NVMe Gen4 SSD</li>
                                <li className="pc-information-list-specs-item">32GB DDR5-6000MHz RGB RAM</li>
                            </ul>
                            
                            <hr />

                            <div className="pc-information-order-details">
                                <div className='order-details'>
                                    <span className="pc-information-save-price">Save $500</span>

                                    <div className="pc-information-price">
                                        <p className="new-price"><strong>$2299</strong></p>
                                        <p className="old-price">$2799</p>
                                    </div>

                                    <span className="pc-information-monthly-payment">Starting at <span className='monthly-payment-amount'>$111/mo</span> with <strong>affirm</strong></span>
                                    <p className="pc-information-shipping"><strong>Free Shipping</strong></p>
                                    <p className="pc-information-delivery">Delivery in 3-5 Business Days</p>
                                </div>

                                <button className="pc-information-buy-btn">Buy</button>
                            </div>
                        </div>
                    </div>

                    <div className="pc-list-item">
                        <img src={pc2} alt="" className='pc-item-cover-img' />

                        <div className="pc-information">
                            <h3 className="pc-information-title">RDY Fractal RR002</h3>

                            <ul className="pc-information-list-specs" role='list'>
                                <li className="pc-information-list-specs-item">Windows 11 Home</li>
                                <li className="pc-information-list-specs-item">AMD Ryzen™ 7 7800X3D CPU</li>
                                <li className="pc-information-list-specs-item">AMD Radeon RX 7900 XTX - 24GB</li>
                                <li className="pc-information-list-specs-item">2TB M.2 NVMe SSD</li>
                                <li className="pc-information-list-specs-item">32GB DDR5-5600MHz RGB RAM</li>
                            </ul>

                            <hr />

                            <div className="pc-information-order-details">
                                <div className='order-details'>
                                    <span className="pc-information-save-price">Save $250</span>

                                    <div className="pc-information-price">
                                        <p className="new-price"><strong>$2399</strong></p>
                                        <p className="old-price">$2649</p>
                                    </div>

                                    <span className="pc-information-monthly-payment">Starting at <span className='monthly-payment-amount'>$111/mo</span> with <strong>affirm</strong></span>
                                    <p className="pc-information-shipping"><strong>Free Shipping</strong></p>
                                    <p className="pc-information-delivery">Delivery in 3-5 Business Days</p>
                                </div>

                                <button className="pc-information-buy-btn">Buy</button>
                            </div>
                        </div>
                    </div>

                    <div className="pc-list-item">
                        <img src={pc3} alt="" className='pc-item-cover-img' />

                        <div className="pc-information">
                            <h3 className="pc-information-title">RDY Lancool 005</h3>

                            <ul className="pc-information-list-specs" role='list'>
                                <li className="pc-information-list-specs-item">Windows 11 Home</li>
                                <li className="pc-information-list-specs-item">Intel® Core™ i9-14900KF CPU</li>
                                <li className="pc-information-list-specs-item">GeForce RTX 4080 SUPER - 16GB</li>
                                <li className="pc-information-list-specs-item">2TB M.2 NVMe Gen4 SSD</li>
                                <li className="pc-information-list-specs-item">32GB DDR5-6000MHz RGB RAM</li>
                            </ul>

                            <hr />

                            <div className="pc-information-order-details">
                                <div className='order-details'>
                                    <span className="pc-information-save-price">Save $500</span>

                                    <div className="pc-information-price">
                                        <p className="new-price"><strong>$2299</strong></p>
                                        <p className="old-price">$2799</p>
                                    </div>

                                    <span className="pc-information-monthly-payment">Starting at <span className='monthly-payment-amount'>$111/mo</span> with <strong>affirm</strong></span>
                                    <p className="pc-information-shipping"><strong>Free Shipping</strong></p>
                                    <p className="pc-information-delivery">Delivery in 3-5 Business Days</p>
                                </div>

                                <button className="pc-information-buy-btn">Buy</button>
                            </div>
                        </div>
                    </div>

                    <div className="pc-list-item">
                        <img src={pc4} alt="" className='pc-item-cover-img' />

                        <div className="pc-information">
                            <h3 className="pc-information-title">RDY Lancool 005</h3>

                            <ul className="pc-information-list-specs" role='list'>
                                <li className="pc-information-list-specs-item">Windows 11 Home</li>
                                <li className="pc-information-list-specs-item">Intel® Core™ i9-14900KF CPU</li>
                                <li className="pc-information-list-specs-item">GeForce RTX 4080 SUPER - 16GB</li>
                                <li className="pc-information-list-specs-item">2TB M.2 NVMe Gen4 SSD</li>
                                <li className="pc-information-list-specs-item">32GB DDR5-6000MHz RGB RAM</li>
                            </ul>

                            <hr />

                            <div className="pc-information-order-details">
                                <div className='order-details'>
                                    <span className="pc-information-save-price">Save $500</span>

                                    <div className="pc-information-price">
                                        <p className="new-price"><strong>$2299</strong></p>
                                        <p className="old-price">$2799</p>
                                    </div>

                                    <span className="pc-information-monthly-payment">Starting at <span className='monthly-payment-amount'>$111/mo</span> with <strong>affirm</strong></span>
                                    <p className="pc-information-shipping"><strong>Free Shipping</strong></p>
                                    <p className="pc-information-delivery">Delivery in 3-5 Business Days</p>
                                </div>

                                <button className="pc-information-buy-btn">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}