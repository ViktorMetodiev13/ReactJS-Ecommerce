import './slides.css'

import React from "react";

import slideOne from '../../../assets/slideImages/slideOneImg.webp'

export const SlideOne: React.FC = () => {
    return (
        <div>
            <img src={slideOne} alt="labor day massive sale on pcs" />

            <div className="information">
                <h2 className="information-title-slide-one">Labor Day Massive Sale</h2>

                <ul className="information-slide-one-list">
                    <li className="slide-one-list-item">5% OFF for ALL purchase over $999 with Code "GAMERDAYS" *</li>
                    <li className="slide-one-list-item">0% APR Affirm Financing for up to 6 months for US customers with qualifying credit*</li>
                    <li className="slide-one-list-item">FREE AMD Ryzen 7 9700X upgrade from Ryzen 5 9600X*</li>
                    <li className="slide-one-list-item">$100 INSTANT REBATE on Intel i9-14900K, i9-14900KF, i7-14700K, and i5-14600K equipped Desktops*</li>
                    <li className="slide-one-list-item">$50 INSTANT REBATE on AMD Ryzen 7 7800X3D, Ryzen 7 7700 and Ryzen 5 7600 equipped Desktops*</li>
                    <li className="slide-one-list-item">$200 OFF on ALL GeForce RTX 4090 24GB Video Card*</li>
                    <li className="slide-one-list-item">$100 OFF on ALL GeForce RTX 4080 SUPER Video Card*</li>
                </ul>

                <p className='information-slide-one-small-text'>* See sale page for details and limitations.</p>

                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}