import '../auth.css';

import React from "react";

import backgroundImg from '../../../assets/login-register-Background.jpg';
import { Link } from 'react-router-dom';

import * as PATHS from '../../../shared/paths';


export const ResetPassword: React.FC = () => {
    return (
        <div className="auth-register">
            <img src={backgroundImg} className='login-register-background' />

            <form className='auth-reset-password-form'>
                <div className="auth-reset-password-form-header">
                    <h2 className="auth-title">Reset your password</h2>

                    <p className="auth-reset-password-subtitle">We will send you an email to reset your password.</p>
                </div>

                <input type="email" placeholder='Email' className='auth-field' />

                <div className="auth-reset-password-form-footer">
                    <button className="auth-create-btn">Submit</button>

                    <p className="sign-in"><Link to={PATHS.LOGIN} className='register-sign-in-link'>Cancel</Link></p>
                </div>
            </form>
        </div>
    )
}