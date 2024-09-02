import './slides.css'

import React from "react";

import slideNine from '../../../assets/slideImages/slideNineImg.webp'

export const SlideNine: React.FC = () => {
    return (
        <div>
            <img src={slideNine} alt="labor day rtx4070 ti super" />

            <div className="information">
                <h2 className="information-title-slide-nine">The Most Advanced Graphics For Gamers</h2>

                <p className="information-subtitle-slide-nine">The all new AMD Radeon 7000 Series. Built on the groundbreaking AMD RDNA™ 3 architecture with chiplet technology.</p>
                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}