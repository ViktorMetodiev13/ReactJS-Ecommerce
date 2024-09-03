import React from 'react';
import './footer.css';

import footerImg from '../../assets/Footer_Background.webp'

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <p className="footer-paragraph"><strong>© 1998 - 2024 CyberpowerPC All Rights Reserved.</strong></p>
                <p className="footer-paragraph">All images appearing on this website are copyright CyberPowerPC. Any unauthorized use of its logos and other graphics is forbidden. Prices and specifications are subject to change without notice. CYBERPOWERPC IS NOT RESPONSIBLE FOR ANY TYPO, PHOTOGRAPH, OR PROGRAM ERRORS, AND RESERVES THE RIGHT TO CANCEL ANY INCORRECT ORDERS.</p>
                <p className="footer-paragraph">System pictures shown with optional accessories</p>
                <p className="footer-paragraph">Your rate will be 0% APR or 10–30% APR based on credit, and is subject to an eligibility check. For example, a $1000 purchase might cost $167/mo over 12 months for as low as 0% APR. For purchases under $100, limited payment options are available. Payment options through Affirm are provided by these lending partners: affirm.com/lenders. Options depend on your purchase amount, and a down payment may be required</p>
            </div>

            <img src={footerImg} className='footer-background-img' />
        </div>
    )
}