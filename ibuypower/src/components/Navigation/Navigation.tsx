import './navigation.css'

import { Link } from 'react-router-dom';

import logo from '../../assets/ibp-logo.avif'

export const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="left-side"></div>

            <ul className='nav-list' role='list'>
                <li className='nav-list-item'>
                    <Link to="/gaming-pcs">Gaming PCs</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/gaming-laptops">Gaming Laptops</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/"><img className="website-logo" src={logo} alt="ibp-logo" /></Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/support">Support</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/about-us">About Us</Link>
                </li>
            </ul>

            <ul className="icons-list">
                <i className="fas fa-search"></i>
                <i className="fas fa-user"></i>
                <i className="fas fa-shopping-cart"></i>
            </ul>
        </nav>
    )
}