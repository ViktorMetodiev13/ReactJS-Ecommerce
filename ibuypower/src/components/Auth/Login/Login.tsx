import '../auth.css';

import React from "react";

import backgroundImg from '../../../assets/login-register-Background.jpg';
import { Link, useNavigate } from 'react-router-dom';

import * as PATHS from '../../../shared/paths';


export const Login: React.FC = () => {
    const navigate = useNavigate();

    const navigateToRegister = () => {
        navigate(PATHS.REGISTER)
    };

    return (
        <div className="auth-login">
            <img src={backgroundImg} className='login-register-background' />

            <form className='auth-login-form'>
                <div className="log-in-section">
                    <h2 className="auth-title">Log In.</h2>

                    <div className="input-fields">
                        <input type="text" placeholder='Email' className='auth-field' />
                        <input type="password" placeholder='Password' className='auth-field' />

                        <button className="auth-login-btn">Login</button>

                        <p className="sign-in"><Link to={PATHS.RESET_PASSWORD} className='register-sign-in-link'>Forgot your password?</Link></p>
                    </div>
                </div>

                <div className="register-section">
                    <h2 className="register-section-title">Don't have an Account?</h2>

                    <button className="auth-sign-up-btn" onClick={navigateToRegister}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}