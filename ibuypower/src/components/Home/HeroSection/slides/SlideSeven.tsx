import React from "react";

import slideSeven from '../../../../assets/slideImages/slideSevenImg.webp'

export const SlideSeven: React.FC = () => {
    return (
        <div>
            <img src={slideSeven} alt="labor day rtx4070 ti super" />

            <div className="information">
                <h2 className="information-title-slide-seven">Kinetic Series</h2>

                <p className="information-subtitle-slide-seven">
                    Get geat airflow with our new Kinetic gaming case, 
                    using technology to give your PC 
                    the best possible airflow based on how its performing 
                    in real time.
                </p>
                <button className="information-shop-btn-slide-seven">Shop</button>
            </div>
        </div>
    )
}