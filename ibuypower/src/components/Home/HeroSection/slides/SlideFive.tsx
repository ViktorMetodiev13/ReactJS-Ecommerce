import React from "react";

import slideFive from '../../../../assets/slideImages/slideFiveImg.webp'

export const SlideFive: React.FC = () => {
    return (
        <div>
            <img src={slideFive} alt="labor day rtx4070 ti super" />

            <div className="information">
                <h2 className="information-title">TRYX Panorama AMOLED Screen Liquid Cooler</h2>

                <p className="information-subtitle-slide-five">Panorama delivers a more vivid and immersive viewing experience, enables a host of convenient playback settings, making it effortless to engage with various types of content</p>

                <button className="information-shop-btn">Shop</button>
            </div>
        </div>
    )
}