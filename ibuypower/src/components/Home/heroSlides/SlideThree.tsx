import './slides.css'

import React from 'react'

import slideThereImg from '../../../assets/slideImages/slideThreeImg.webp'

export const SlideThree: React.FC = () => {
    return (
        <div>
            <img src={slideThereImg} alt="labor day rtx4070 ti super" />

            <div className="information">
                <h2 className="information-title">Labor Day RTX 4070 Ti SUPER</h2>

                <p className="information-subtitle">Windows 11 Home / Intel® Core™ Processor i9-14900K / GeForce <span className='slide-one-important-text'>RTX™ 4070 Ti SUPER</span> 16GB GDDR6X Video Card / 32GB (16GBx2) DDR5/6000MHz Memory / 2TB WD Blue SN580 M.2 PCIe SSD</p>
                <p className="information-price">$2225</p>

                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}