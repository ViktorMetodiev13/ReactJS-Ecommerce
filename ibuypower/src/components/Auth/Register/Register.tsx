import '../auth.css';

import React from "react";

import backgroundImg from '../../../assets/login-register-Background.jpg';
import { Link } from 'react-router-dom';

import * as PATHS from '../../../shared/paths';
import { useFormik } from 'formik';
import { registerYupSchema } from '../../../yupSchemas/registerYupSchema';


export const Register: React.FC = () => {
    const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: registerYupSchema,
        onSubmit: () => {
            console.log(values);
        }
    });

    return (
        <div className="auth-register">
            <img src={backgroundImg} className='login-register-background' />

            <form className='auth-register-form' onSubmit={handleSubmit}>
                <h2 className="auth-title">Create Account</h2>

                <div className="input-fields">
                    <input
                        id='firstName'
                        type="text"
                        placeholder='First Name'
                        className='auth-field'
                        onChange={handleChange}
                        value={values.firstName}
                        onBlur={handleBlur}
                    />
                    {touched.firstName && errors.firstName && (
                        <p className='register-error-text'>{errors.firstName}</p>
                    )} 
                    <input
                        id='lastName'
                        type="text"
                        placeholder='Last Name'
                        className='auth-field'
                        onChange={handleChange}
                        value={values.lastName}
                        onBlur={handleBlur}
                    />
                    {touched.firstName && errors.lastName && !onfocus ? (<p className='register-error-text'>Last Name must be between 2 and 15 charactes</p>) : null}
                    <input
                        id='email'
                        type="email"
                        placeholder='Email'
                        className='auth-field'
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {errors.email && <p className='register-error-text'>Invalid Email</p>}
                    <input
                        id='password'
                        type="password"
                        placeholder='Password'
                        className='auth-field'
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                    />
                    {errors.password && <p className='register-error-text'>Password must be between 6 and 20 characters</p>}

                    <p className="sign-in"><Link to={PATHS.LOGIN} className='register-sign-in-link'>Already have an Account?</Link></p>

                    <button className="auth-create-btn" type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}