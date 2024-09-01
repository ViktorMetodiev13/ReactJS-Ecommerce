import './home.css';

import React from "react";

import hero from '../../assets/hero.avif'

export const Home: React.FC = () => {
    return (
        <div className="home">
            {/* <h1>home page</h1> */}
            <img className="home-hero-img" src={hero} alt="" />
        </div>
    )
}