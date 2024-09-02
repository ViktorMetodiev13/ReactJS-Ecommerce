import './slides.css'

import React from 'react'

import slideTwo from '../../../assets/slideImages/slideTwoImg.webp'

export const SlideTwo: React.FC = () => {
    return (
        <div>
            <img src={slideTwo} alt="eSports gaming systems" />

            <div className="information">
                <h2 className="information-title">Pro eSports Ready Gaming Systems</h2>

                <p className="information-subtitle-slide-two">The faster the better. It's time for a CyberPowerPC with Intel® Inside and Windows® 11. Let's go!</p>

                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}