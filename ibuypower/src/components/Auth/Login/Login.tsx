import '../auth.css';

import React from "react";

import backgroundImg from '../../../assets/login-register-Background.jpg';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
    return (
        <div className="auth-login">
            <img src={backgroundImg} className='login-register-background' />

            <form className='auth-form'>
                <h2 className="auth-title">Log In.</h2>

                <div className="input-fields">
                    <input type="text" placeholder='Email' className='auth-field' />
                    <input type="password" placeholder='Password' className='auth-field' />

                    <button className="auth-login-btn">Login</button>
                    
                    <p className="sign-in"><Link to='/login' className='register-sign-in-link'>Forgot your password?</Link></p>
                </div>

            </form>
        </div>
    )
}