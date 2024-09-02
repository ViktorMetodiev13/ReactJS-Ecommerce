import './slides.css'

import React from "react";

import slideFour from '../../../assets/slideImages/slideFourImg.webp'

export const SlideFour: React.FC = () => {
    return (
        <div>
            <img src={slideFour} alt="labor day rtx4070 ti super" />

            <div className="information">
                <h2 className="information-title">Infinity 8800 Pro Gaming PC</h2>

                <p className="information-subtitle-slide-four">Powered by the all new 14th Gen Intel® Core™ <strong>i9-14900K</strong>  Processor</p>

                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}