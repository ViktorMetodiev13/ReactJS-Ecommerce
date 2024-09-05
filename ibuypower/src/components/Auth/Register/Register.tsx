import '../auth.css';

import React from "react";

import backgroundImg from '../../../assets/login-register-Background.jpg';
import { Link } from 'react-router-dom';

export const Register: React.FC = () => {
    return (
        <div className="auth-register">
            <img src={backgroundImg} className='login-register-background' />

            <form className='auth-register-form'>
                <h2 className="auth-title">Create Account</h2>

                <div className="input-fields">
                    <input type="text" placeholder='First Name' className='auth-field' />
                    <input type="text" placeholder='Last Name' className='auth-field' />
                    <input type="email" placeholder='Email' className='auth-field' />
                    <input type="password" placeholder='Password' className='auth-field' />

                    <p className="sign-in"><Link to='/login' className='register-sign-in-link'>Already have an Account?</Link></p>

                    <button className="auth-create-btn">Create</button>
                </div>
            </form>
        </div>
    )
}