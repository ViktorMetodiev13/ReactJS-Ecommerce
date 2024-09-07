import './featuresList.css';

import React from 'react';

import featureImg1 from '../../../assets/featuresImages/firstImage.webp';
import featureImg2 from '../../../assets/featuresImages/secondImage.webp';
import featureImg3 from '../../../assets/featuresImages/thirdImage.webp';
import featureImg4 from '../../../assets/featuresImages/forthImage.webp';
import featureImg5 from '../../../assets/featuresImages/fifthImg-removebg-preview.png';

export const FeaturesList: React.FC = () => {
    return (
        <div className="features-list">
                <div className="features-item">
                    <div className="feature-content">
                        <img src={featureImg1} alt="Prebuilt Gaming PC" className='feature-one-image' />

                        <div className="feature-information">
                            <h3 className="feature-information-title">Prebuilt Gaming PC</h3>

                            <p className="feature-information-description">Begin your gaming journey with professionally crafted RDY prebuilt systems, and take advantage of Free 2-Day Shipping to get started even faster!</p>

                            <button className="shop-now-btn">Show Now</button>
                        </div>
                    </div>
                </div>

                <div className="features-item">
                    <div className="feature-content">
                        <img src={featureImg2} alt="Prebuilt Gaming PC" className='feature-one-image' />

                        <div className="feature-information">
                            <h3 className="feature-information-title">Easy Builder</h3>

                            <p className="feature-information-description">Create your perfect gaming PC based on the games you play, and we’ll have it custom-built and shipped to you within 5 business days!</p>

                            <button className="shop-now-btn">Show Now</button>
                        </div>
                    </div>
                </div>

                <div className="features-item">
                    <div className="feature-content">
                        <img src={featureImg3} alt="Prebuilt Gaming PC" className='feature-one-image' />

                        <div className="feature-information">
                            <h3 className="feature-information-title">Custom Gaming PCs</h3>

                            <p className="feature-information-description">Custom-built to your specs, our PCs give you the edge. Choose the ideal components with our builder to ensure you outclass your adversaries.</p>

                            <button className="shop-now-btn">Show Now</button>
                        </div>
                    </div>
                </div>

                <div className="features-pcs-and-laptops">
                    <div className="features-gaming-pcs">
                        <h3 className="features-gaming-pcs-title">Gaming PCs</h3>

                        <p className="features-gaming-pcs-subtitle">Explore our complete selection of gaming PCs and dive into the ultimate gaming experience, wherever you are.</p>

                        <button className="shop-now-btn">Show Now</button>

                        <img src={featureImg5} alt="Gaming PCs" className='features-image-pcs' />
                    </div>

                    <div className="features-gaming-pcs">
                        <h3 className="features-gaming-pcs-title">Gaming Laptops</h3>

                        <p className="features-gaming-pcs-subtitle">Browse through our full range of configured gaming laptops. Immerse yourself in the ultimate gaming experience on the go.</p>

                        <button className="shop-now-btn">Show Now</button>

                        <img src={featureImg4} alt="Gaming Laptops" className='features-image-pcs' />
                    </div>
                </div>
            </div>
    )
}