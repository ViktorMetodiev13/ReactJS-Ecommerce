import './slides.css'

import React from "react";

import slideNine from '../../../assets/slideNineImg.webp'

export const SlideNine: React.FC = () => {
    return (
        <div>
            <img src={slideNine} alt="labor day rtx4070 ti super" />

            <div className="information">
                <h2 className="information-title-slide-nine">GeForce RTX® 40 Series</h2>

                <p className="information-subtitle-slide-nine">NVIDIA® GeForce RTX® 40 Series GPUs are beyond fast for gamers and creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture.</p>
                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}