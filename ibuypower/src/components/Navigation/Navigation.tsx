import './navigation.css'

import { Link } from 'react-router-dom';

import logo from '../../assets/ibp-logo.avif'

export const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="left-side"></div>

            <ul className='nav-list' role='list'>
                <li className='nav-list-item'>
                    <Link to="/products/gaming-pcs" className='nav-list-item-link'>Gaming PCs</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/products/gaming-laptops" className='nav-list-item-link'>Gaming Laptops</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/"><img className="website-logo" src={logo} alt="ibp-logo" /></Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/support" className='nav-list-item-link'>Support</Link>
                </li>
                <li className='nav-list-item'>
                    <Link to="/about-us" className='nav-list-item-link'>About Us</Link>
                </li>
            </ul>

            <ul className="nav-icons-list" role='list'>
                <li className='nav-icon-list-item'><button className='nav-icon-list-item-btn'><i className="fas fa-search"></i></button></li>
                <li className='nav-icon-list-item'><Link to='/login' className='nav-icon-list-item-link'><i className="fas fa-user"></i></Link></li>
                <li className='nav-icon-list-item'><Link to='/cart' className='nav-icon-list-item-link'><i className="fas fa-shopping-cart"></i></Link></li>
            </ul>
        </nav>
    )
}