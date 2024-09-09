import '../products.css';

import React from 'react';
import { Link } from 'react-router-dom';

import gamingLaptopsHeroImg from '../../../../assets/gamingGearImages/gaming_laptops_hero_Img.avif';
import featuredDealsLaptopsImgOne from '../../../../assets/gamingGearImages/featuredDealsLaptopsImgOne.avif';
import featuredDealsLaptopsImgTwo from '../../../../assets/gamingGearImages/featuredDealsLaptopsImgTwo.avif';
import laptopOne from '../../../../assets/gamingGearImages/laptop1.avif'


export const GamingLaptops: React.FC = () => {
    return (
        <div className="gaming-gear">
            <div className="gaming-gear-hero-section">
                <div className="gaming-gear-hero-content">
                    <div className="gaming-gear-hero-section-text">
                        <h2 className="gaming-gear-hero-content-title">Gaming Laptops</h2>
                        <p className="gaming-gear-hero-content-subtitle">Browse through our full range of configured gaming laptops. Immerse yourself in the ultimate gaming experience on the go.</p>
                    </div>

                    <img src={gamingLaptopsHeroImg} alt="gaming laptops" className="gaming-gear-hero-content-img" />
                </div>
            </div>

            <div className="gaming-gear-featured-deals-section">
                <h2 className="gaming-gear-featured-deals-section-title">Featured Deals</h2>

                <div className="gaming-gear-featured-deals-section-content">
                    <div className="gaming-gear-featured-deal">
                        <h2 className="gaming-gear-featured-deal-title">Chimera NP7570E Gaming Laptop</h2>

                        <ul className="gaming-gear-featured-deal-specs-list" role='list'>
                            <li className="gaming-gear-featured-deal-specs-list-item">
                                <h3 className="gaming-gear-featured-deal-specs-list-item-title">OS</h3>

                                <p className="gaming-gear-featured-deal-specs-list-item-subtitle">Windows 11 Home</p>
                            </li>
                            <li className="gaming-gear-featured-deal-specs-list-item">
                                <h3 className="gaming-gear-featured-deal-specs-list-item-title">CPU</h3>

                                <p className="gaming-gear-featured-deal-specs-list-item-subtitle">Intel® Core™ i9-14900HX CPU</p>
                            </li>
                            <li className="gaming-gear-featured-deal-specs-list-item">
                                <h3 className="gaming-gear-featured-deal-specs-list-item-title">GPU</h3>

                                <p className="gaming-gear-featured-deal-specs-list-item-subtitle">NVIDIA GeForce RTX 4070 - 8GB</p>
                            </li>
                            <li className="gaming-gear-featured-deal-specs-list-item">
                                <h3 className="gaming-gear-featured-deal-specs-list-item-title">MEMORY</h3>

                                <p className="gaming-gear-featured-deal-specs-list-item-subtitle">16GB DDR5-5200MHz RAM</p>
                            </li>
                        </ul>

                        <div className="gaming-gear-featured-deal-price">
                            <div className="gaming-gear-featured-deal-price-tag">
                                <p className="gaming-gear-featured-deal-new-price">$1649</p>
                                <p className="gaming-gear-featured-deal-old-price">$1799</p>
                            </div>

                            <p className="gaming-gear-featured-deal-money-saved">Save $150 on this deal!</p>
                        </div>

                        <button className='gaming-gear-featured-deal-buy-now-btn'>Buy Now</button>

                        <img src={featuredDealsLaptopsImgOne} alt="Chimera NP7570E Gaming Laptop" className='gaming-gear-featured-deal-img' />
                    </div>

                    <div className="gaming-gear-featured-deal">
                        <h2 className="gaming-gear-featured-deal-title">Chimera NP9373W Gaming Laptop</h2>

                        <ul className="gaming-gear-featured-deal-specs-list" role='list'>
                            <li className="gaming-gear-featured-deal-specs-list-item">
                                <h3 className="gaming-gear-featured-deal-specs-list-item-title">OS</h3>

                                <p className="gaming-gear-featured-deal-specs-list-item-subtitle">Windows 11 Home</p>
                            </li>
                            <li className="gaming-gear-featured-deal-specs-list-item">
                                <h3 className="gaming-gear-featured-deal-specs-list-item-title">CPU</h3>

                                <p className="gaming-gear-featured-deal-specs-list-item-subtitle">Intel® Core™ i9-14900HX CPU</p>
                            </li>
                            <li className="gaming-gear-featured-deal-specs-list-item">
                                <h3 className="gaming-gear-featured-deal-specs-list-item-title">GPU</h3>

                                <p className="gaming-gear-featured-deal-specs-list-item-subtitle">NVIDIA GeForce RTX 4090 - 16GB</p>
                            </li>
                            <li className="gaming-gear-featured-deal-specs-list-item">
                                <h3 className="gaming-gear-featured-deal-specs-list-item-title">MEMORY</h3>

                                <p className="gaming-gear-featured-deal-specs-list-item-subtitle">16GB DDR5-5600MHz RAM</p>
                            </li>
                        </ul>

                        <div className="gaming-gear-featured-deal-price">
                            <div className="gaming-gear-featured-deal-price-tag">
                                <p className="gaming-gear-featured-deal-new-price">$2799</p>
                                <p className="gaming-gear-featured-deal-old-price">$2949</p>
                            </div>

                            <p className="gaming-gear-featured-deal-money-saved">Save $150 on this deal!</p>
                        </div>

                        <button className='gaming-gear-featured-deal-buy-now-btn'>Buy Now</button>

                        <img src={featuredDealsLaptopsImgTwo} alt="Chimera NP9373W Gaming Laptop" className='gaming-gear-featured-deal-img' />
                    </div>
                </div>
            </div>

            <div className="gaming-gear-all-products-section">
                <h2 className="gaming-gear-all-products-section-title">All Gaming Laptops</h2>

                <div className="gaming-gear-all-products-section-content">
                    <div className="gaming-gear-all-products-section-aside">
                        <div className="gaming-gear-all-products-section-aside-filter">
                            <p className="gaming-gear-all-products-section-aside-filter-name">Filter</p>
                            <p className="gaming-gear-all-products-section-aside-filter-subname">Reset All</p>
                        </div>

                        <div className="gaming-gear-all-products-section-aside-price">
                            <div className="gaming-gear-all-products-section-aside-price-header">
                                <p className="gaming-gear-all-products-section-aside-price-name">Price</p>
                                <p className="gaming-gear-all-products-section-aside-price-subname"><i className="fas fa-chevron-up"></i></p>
                            </div>
                        </div>

                        <div className="gaming-gear-all-products-section-aside-processor">
                            <p className="gaming-gear-all-products-section-aside-processor-name">Processor</p>
                            <p className="gaming-gear-all-products-section-aside-processor-subname"><i className="fas fa-chevron-up"></i></p>
                        </div>

                        <div className="gaming-gear-all-products-section-aside-video-card">
                            <p className="gaming-gear-all-products-section-aside-video-card-name">Video Card</p>
                            <p className="gaming-gear-all-products-section-aside-video-card-subname"><i className="fas fa-chevron-up"></i></p>
                        </div>

                        <div className="gaming-gear-all-products-section-aside-memory">
                            <p className="gaming-gear-all-products-section-aside-memory-name">Memory</p>
                            <p className="gaming-gear-all-products-section-aside-memory-subname"><i className="fas fa-chevron-up"></i></p>
                        </div>

                        <div className="gaming-gear-all-products-section-aside-storage">
                            <p className="gaming-gear-all-products-section-aside-storage-name">Storage</p>
                            <p className="gaming-gear-all-products-section-aside-storage-subname"><i className="fas fa-chevron-up"></i></p>
                        </div>
                    </div>

                    <div className="gaming-gear-all-products-section-main">
                        <div className="gaming-gear-all-products-section-main-header">
                            <select className="gaming-gear-all-products-section-main-header-sort-by">
                                <option className="gaming-gear-all-products-section-main-header-sort-by-value" value="Best Seller">Best Seller</option>
                                <option className="gaming-gear-all-products-section-main-header-sort-by-value" value="Price: Low to High">Price: Low to High</option>
                                <option className="gaming-gear-all-products-section-main-header-sort-by-value" value="Price: High to Low">Price: High to Low</option>
                            </select>

                            {/* LINK ISN'T CORRECT IT SHOULD BE SOMETHING ELSE - VISUALLY IT WORKS */}
                            <div className="gaming-gear-all-products-section-main-header-pagination">
                                <Link to='/' className='gaming-gear-all-products-section-main-header-pagination-item'>&laquo;</Link>
                                <Link to='/' className='gaming-gear-all-products-section-main-header-pagination-item'>1</Link>
                                <Link to='/' className='gaming-gear-all-products-section-main-header-pagination-item'>2</Link>
                                <Link to='/' className='gaming-gear-all-products-section-main-header-pagination-item'>3</Link>
                                <Link to='/' className='gaming-gear-all-products-section-main-header-pagination-item'>&raquo;</Link>
                            </div>
                        </div>

                        <div className="gaming-gear-all-products-section-main-products">
                            <div className="pc-list-item">
                                <img src={laptopOne} alt="" className='pc-item-cover-img' />

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
                                <img src={laptopOne} alt="" className='pc-item-cover-img' />

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
                                <img src={laptopOne} alt="" className='pc-item-cover-img' />

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
                                <img src={laptopOne} alt="" className='pc-item-cover-img' />

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

                        <div className="gaming-gear-all-products-section-main-footer">
                            {/* LINK ISN'T CORRECT IT SHOULD BE SOMETHING ELSE - VISUALLY IT WORKS */}
                            <div className="gaming-gear-all-products-section-main-footer-pagination">
                                <Link to='/' className='gaming-gear-all-products-section-main-footer-pagination-item'>&laquo;</Link>
                                <Link to='/' className='gaming-gear-all-products-section-main-footer-pagination-item'>1</Link>
                                <Link to='/' className='gaming-gear-all-products-section-main-footer-pagination-item'>2</Link>
                                <Link to='/' className='gaming-gear-all-products-section-main-footer-pagination-item'>3</Link>
                                <Link to='/' className='gaming-gear-all-products-section-main-footer-pagination-item'>&raquo;</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}