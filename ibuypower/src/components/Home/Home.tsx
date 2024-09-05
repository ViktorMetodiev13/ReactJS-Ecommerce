import './home.css';

import React from "react";

import { HeroSection } from './HeroSection/HeroSection';

import { BestSellingPCs } from './BestSellingGamingPCs/BestSellingPCs';
import { FeaturesList } from './FeaturesList/FeaturesList';

export const Home: React.FC = () => {

    return (
        <div className="home">
            <HeroSection />

            <BestSellingPCs />

            <FeaturesList />

            <div className="follow-journey">
                <h2 className="follow-journey-title">Follow The Journey <span className='follow-journey-title-special-text'>@iBUYPOWER</span></h2>

                <ul className="follow-journey-icon-list" role='list'>
                    <li className="follow-journey-icon-list-item"><i className="fab fa-facebook-f"></i></li>
                    <li className="follow-journey-icon-list-item"><i className="fab fa-twitter"></i></li>
                    <li className="follow-journey-icon-list-item"><i className="fab fa-instagram"></i></li>
                    <li className="follow-journey-icon-list-item"><i className="fab fa-tiktok"></i></li>
                    <li className="follow-journey-icon-list-item"><i className="fab fa-youtube"></i></li>
                </ul>
            </div>
        </div>
    )
}