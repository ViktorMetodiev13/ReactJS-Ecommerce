import './slides.css'

import React from "react";

import slideEight from '../../../assets/slideEightImg.webp'

export const SlideEight: React.FC = () => {
    return (
        <div>
            <img src={slideEight} alt="labor day rtx4070 ti super" />

            <div className="information">
                <h2 className="information-title">Game without compromise.</h2>

                <p className="information-subtitle-slide-eight">Go Beyond performance with Intel® Core™ processors.</p>
                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}