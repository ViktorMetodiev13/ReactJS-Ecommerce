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

import featureImg1 from '../../assets/features-images/firstImage.webp';
import featureImg2 from '../../assets/features-images/secondImage.webp';
import featureImg3 from '../../assets/features-images/thirdImage.webp';
import featureImg4 from '../../assets/features-images/forthImage.webp';
import featureImg5 from '../../assets/features-images/fifthImage.webp';

export const Home: React.FC = () => {
    return (
        <div className="home">
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


            <div className="featured-desktops">
                <h2 className="featured-desktops-title">Best Selling Gaming PC</h2>

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

            <div className="features-list">
                <div className="features-item">
                    <div className="feature-content">
                        <img src={featureImg1} alt="Prebuilt Gaming PC" className='feature-one-image' />

                        <div className="feature-information">
                            <h3 className="feature-information-title">Prebuilt Gaming PC</h3>

                            <p className="feature-information-description">Begin your gaming journey with professionally crafted RDY prebuilt systems, and take advantage of Free 2-Day Shipping to get started even faster!</p>

                            <button className="shop-now-btn">Show Now</button>
                        </div>
                    </div>
                </div>

                <div className="features-item">
                    <div className="feature-content">
                        <img src={featureImg2} alt="Prebuilt Gaming PC" className='feature-one-image' />

                        <div className="feature-information">
                            <h3 className="feature-information-title">Easy Builder</h3>

                            <p className="feature-information-description">Create your perfect gaming PC based on the games you play, and we’ll have it custom-built and shipped to you within 5 business days!</p>

                            <button className="shop-now-btn">Show Now</button>
                        </div>
                    </div>
                </div>

                <div className="features-item">
                    <div className="feature-content">
                        <img src={featureImg3} alt="Prebuilt Gaming PC" className='feature-one-image' />

                        <div className="feature-information">
                            <h3 className="feature-information-title">Custom Gaming PCs</h3>

                            <p className="feature-information-description">Custom-built to your specs, our PCs give you the edge. Choose the ideal components with our builder to ensure you outclass your adversaries.</p>

                            <button className="shop-now-btn">Show Now</button>
                        </div>
                    </div>
                </div>

                <div className="features-pcs-and-laptops">
                    <div className="gaming-pcs">
                        <h3 className="gaming-pcs-title">Gaming PCs</h3>

                        <p className="gaming-pcs-subtitle">Explore our complete selection of gaming PCs and dive into the ultimate gaming experience, wherever you are.</p>

                        <button className="shop-now-btn">Show Now</button>

                        <img src={featureImg4} alt="Gaming PCs" className='features-image-pcs' />
                    </div>

                    <div className="gaming-pcs">
                        <h3 className="gaming-pcs-title">Gaming Laptops</h3>

                        <p className="gaming-pcs-subtitle">Browse through our full range of configured gaming laptops. Immerse yourself in the ultimate gaming experience on the go.</p>

                        <button className="shop-now-btn">Show Now</button>

                        <img src={featureImg5} alt="Gaming Laptops" className='features-image-pcs' />
                    </div>
                </div>
            </div>
        </div>
    )
}