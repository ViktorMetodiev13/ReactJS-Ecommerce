import './aboutUs.css';

import React from "react";
import { Link } from 'react-router-dom';

import * as PATHS from '../../shared/paths';

import pcImage from '../../assets/pcImages/pc4.avif'
import laptopImage from '../../assets/gamingGearImages/gaming_laptops_image_details/img1.avif'

export const AboutUs: React.FC = () => {
    return (
        <div className="about-us-page">
            <section className="about-us-hero">
                <h1 className="about-us-title">About Us</h1>
                <p className="about-us-subtitle">Your Ultimate Destination for High-Performance Gaming PCs & Laptops</p>
            </section>

            <section className="about-us-mission">
                <h2 className="about-us-heading">Our Mission</h2>
                <p className="about-us-text">
                    At <strong>iBuyPower</strong>, we are passionate about delivering top-of-the-line gaming systems that empower gamers
                    to experience their favorite titles at the highest levels. We are driven by performance, quality, and innovation.
                </p>
            </section>

            <section className="about-us-story">
                <h2 className="about-us-heading">Our Story</h2>
                <p className="about-us-text">
                    Founded by gaming enthusiasts, <strong>iBuyPower</strong> started with a vision to provide gamers with cutting-edge
                    hardware that delivers both performance and reliability. Over the years, we've built a reputation for excellence
                    by partnering with leading hardware manufacturers and optimizing our systems for the latest AAA titles.
                </p>
            </section>

            <section className="about-us-products">
                <h2 className="about-us-heading">What We Offer</h2>
                <div className="about-us-product-list">
                    <div className="about-us-product">
                        <img src={pcImage} alt="Gaming PC" className="about-us-image" />
                        <p className="about-us-text">Custom-built gaming PCs tailored to your needs</p>
                    </div>
                    <div className="about-us-product">
                        <img src={laptopImage} alt="Gaming Laptop" className="about-us-image" />
                        <p className="about-us-text">High-performance gaming laptops designed for mobility</p>
                    </div>
                </div>
            </section>

            <section className="about-us-values">
                <h2 className="about-us-heading">Our Core Values</h2>
                <ul className="about-us-list">
                    <li className="about-us-list-item"><strong>Quality:</strong> Every system is built with care and precision.</li>
                    <li className="about-us-list-item"><strong>Innovation:</strong> We stay ahead of the curve with the latest technology.</li>
                    <li className="about-us-list-item"><strong>Customer Satisfaction:</strong> We believe in creating experiences, not just selling products.</li>
                    <li className="about-us-list-item"><strong>Passion for Gaming:</strong> Gaming is at the heart of everything we do.</li>
                </ul>
            </section>

            <section className="about-us-contact">
                <h2 className="about-us-heading">Get in Touch</h2>
                <p className="about-us-text">
                    Whether you're a seasoned pro or just getting started, <strong>iBuyPower</strong> is here to support your gaming journey.
                    Reach out to us at <Link to={PATHS.SUPPORT} className="about-us-link">support</Link> for any inquiries or support.
                </p>
            </section>
        </div>
    )
}