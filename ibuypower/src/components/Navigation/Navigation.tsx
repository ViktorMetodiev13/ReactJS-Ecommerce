import './navigation.css'

import { Link } from 'react-router-dom';

import logo from '../../assets/ibp-logo.avif'

import * as PATHS from '../../shared/paths';


export const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="left-side"></div>

            <ul className='nav-list' role='list'>
                <li className='nav-list-item'>
                    <Link to={PATHS.GAMING_PCS} className='nav-list-item-link'>Gaming PCs</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to={PATHS.GAMING_LAPTOPS} className='nav-list-item-link'>Gaming Laptops</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to={PATHS.HOME}><img className="website-logo" src={logo} alt="ibp-logo" /></Link>
                </li>
                <li className='nav-list-item'>
                    <Link to={PATHS.SUPPORT} className='nav-list-item-link'>Support</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to={PATHS.ABOUT_US} className='nav-list-item-link'>About Us</Link>
                </li>
            </ul>

            <ul className="nav-icons-list" role='list'>
                <li className='nav-icon-list-item'><button className='nav-icon-list-item-btn'><i className="fas fa-search"></i></button></li>
                <li className='nav-icon-list-item'><Link to={PATHS.LOGIN} className='nav-icon-list-item-link'><i className="fas fa-user"></i></Link></li>
                <li className='nav-icon-list-item'><Link to={PATHS.CART} className='nav-icon-list-item-link'><i className="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </nav>
    )
}