import './bestSellingPCs.css'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import pc1 from '../../../assets/pcImages/RDY Lancool 005.avif';
import pc2 from '../../../assets/pcImages/RDY Fractal DDOO2.avif';
import pc3 from '../../../assets/pcImages/AMD Ryzen Ultra Gaming Daily Deal.avif';
import pc4 from '../../../assets/pcImages/pc4.avif';

export const BestSellingPCs: React.FC = () => {
    return (
        <div className="best-selling-gaming-pcs">
                <h2 className="best-selling-gaming-pcs-title">Best Selling Gaming PCs</h2>

                <div className="pc-list">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={16}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="pc-list-item">
                                <img src={pc2} alt="" className='pc-item-cover-img' />

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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                        <SwiperSlide>
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
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    )
}