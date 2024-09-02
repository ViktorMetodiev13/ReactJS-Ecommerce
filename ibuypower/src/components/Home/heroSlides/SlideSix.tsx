import './slides.css'

import React from "react";

import slideSix from '../../../assets/slideImages/slideSixImg.webp'

export const SlideSix: React.FC = () => {
    return (
        <div>
            <img src={slideSix} alt="labor day rtx4070 ti super" />

            <div className="information">
                <h2 className="information-title-slide-six">NVIDIA Back To School</h2>

                <p className="information-subtitle-slide-six">
                    Best in Class. And Out.
                    <br />
                    Play, learn, and create accelerated with AI and NVIDIA GeForce RTX™ Laptops.
                </p>
                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}