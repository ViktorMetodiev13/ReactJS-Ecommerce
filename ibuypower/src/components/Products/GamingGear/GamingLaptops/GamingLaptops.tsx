import '../products.css'

import React from 'react'

import gamingLaptopsHeroImg from '../../../../assets/gamingGearImages/gaming_laptops_hero_Img.avif'
import featuredDealsLaptopsImgOne from '../../../../assets/gamingGearImages/featuredDealsLaptopsImgOne.avif'
import featuredDealsLaptopsImgTwo from '../../../../assets/gamingGearImages/featuredDealsLaptopsImgTwo.avif'


export const GamingLaptops: React.FC = () => {
    return (
        <div className="gaming-machines">
            <div className="gaming-machines-hero-section">
                <div className="gaming-machines-hero-content">
                    <div className="gaming-machines-hero-section-text">
                        <h2 className="gaming-machines-hero-content-title">Gaming Laptops</h2>
                        <p className="gaming-machines-hero-content-subtitle">Browse through our full range of configured gaming laptops. Immerse yourself in the ultimate gaming experience on the go.</p>
                    </div>

                    <img src={gamingLaptopsHeroImg} alt="gaming laptops" className="gaming-machines-hero-content-img" />
                </div>
            </div>

            <div className="gaming-machines-featured-deals-section">
                <h2 className="gaming-machines-featured-deals-section-title">Featured Deals</h2>

                <div className="gaming-machines-featured-deals-section-content">
                    <div className="gaming-machines-featured-deal">
                        <h2 className="gaming-machines-featured-deal-title">Chimera NP7570E Gaming Laptop</h2>

                        <ul className="gaming-machines-featured-deal-specs-list" role='list'>
                            <li className="gaming-machines-featured-deal-specs-list-item">
                                <h3 className="gaming-machines-featured-deal-specs-list-item-title">OS</h3>

                                <p className="gaming-machines-featured-deal-specs-list-item-subtitle">Windows 11 Home</p>
                            </li>
                            <li className="gaming-machines-featured-deal-specs-list-item">
                                <h3 className="gaming-machines-featured-deal-specs-list-item-title">CPU</h3>

                                <p className="gaming-machines-featured-deal-specs-list-item-subtitle">Intel® Core™ i9-14900HX CPU</p>
                            </li>
                            <li className="gaming-machines-featured-deal-specs-list-item">
                                <h3 className="gaming-machines-featured-deal-specs-list-item-title">GPU</h3>

                                <p className="gaming-machines-featured-deal-specs-list-item-subtitle">NVIDIA GeForce RTX 4070 - 8GB</p>
                            </li>
                            <li className="gaming-machines-featured-deal-specs-list-item">
                                <h3 className="gaming-machines-featured-deal-specs-list-item-title">MEMORY</h3>

                                <p className="gaming-machines-featured-deal-specs-list-item-subtitle">16GB DDR5-5200MHz RAM</p>
                            </li>
                        </ul>

                        <div className="gaming-machines-featured-deal-price">
                            <div className="gaming-machines-featured-deal-price-tag">
                                <p className="gaming-machines-featured-deal-new-price">$1649</p>
                                <p className="gaming-machines-featured-deal-old-price">$1799</p>
                            </div>

                            <p className="gaming-machines-featured-deal-money-saved">Save $150 on this deal!</p>
                        </div>

                        <button className='gaming-machines-featured-deal-buy-now-btn'>Buy Now</button>

                        <img src={featuredDealsLaptopsImgOne} alt="Chimera NP7570E Gaming Laptop" className='gaming-machines-featured-deal-img' />
                    </div>

                    <div className="gaming-machines-featured-deal">
                        <h2 className="gaming-machines-featured-deal-title">Chimera NP9373W Gaming Laptop</h2>

                        <ul className="gaming-machines-featured-deal-specs-list" role='list'>
                            <li className="gaming-machines-featured-deal-specs-list-item">
                                <h3 className="gaming-machines-featured-deal-specs-list-item-title">OS</h3>

                                <p className="gaming-machines-featured-deal-specs-list-item-subtitle">Windows 11 Home</p>
                            </li>
                            <li className="gaming-machines-featured-deal-specs-list-item">
                                <h3 className="gaming-machines-featured-deal-specs-list-item-title">CPU</h3>

                                <p className="gaming-machines-featured-deal-specs-list-item-subtitle">Intel® Core™ i9-14900HX CPU</p>
                            </li>
                            <li className="gaming-machines-featured-deal-specs-list-item">
                                <h3 className="gaming-machines-featured-deal-specs-list-item-title">GPU</h3>

                                <p className="gaming-machines-featured-deal-specs-list-item-subtitle">NVIDIA GeForce RTX 4090 - 16GB</p>
                            </li>
                            <li className="gaming-machines-featured-deal-specs-list-item">
                                <h3 className="gaming-machines-featured-deal-specs-list-item-title">MEMORY</h3>

                                <p className="gaming-machines-featured-deal-specs-list-item-subtitle">16GB DDR5-5600MHz RAM</p>
                            </li>
                        </ul>

                        <div className="gaming-machines-featured-deal-price">
                            <div className="gaming-machines-featured-deal-price-tag">
                                <p className="gaming-machines-featured-deal-new-price">$2799</p>
                                <p className="gaming-machines-featured-deal-old-price">$2949</p>
                            </div>

                            <p className="gaming-machines-featured-deal-money-saved">Save $150 on this deal!</p>
                        </div>

                        <button className='gaming-machines-featured-deal-buy-now-btn'>Buy Now</button>

                        <img src={featuredDealsLaptopsImgTwo} alt="Chimera NP7570E Gaming Laptop" className='gaming-machines-featured-deal-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}