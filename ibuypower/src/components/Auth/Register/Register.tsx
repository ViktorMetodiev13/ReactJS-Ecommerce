import '../auth.css';

import React from "react";

import backgroundImg from '../../../assets/login-register-Background.jpg';
import { Link, useNavigate } from 'react-router-dom';

import * as PATHS from '../../../shared/paths';
import { useFormik } from 'formik';
import { registerYupSchema } from '../../../yupSchemas/registerYupSchema';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebase';


export const Register: React.FC = () => {
    const navigate = useNavigate();

    const { handleSubmit, handleChange, values, errors, handleBlur, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        validationSchema: registerYupSchema,
        onSubmit: () => {
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                    console.log(user);
                    console.log(values);
                    navigate('/');
                })
                .catch((
                    // error
                ) => {

                    // SET REACT-TOASTIFY FOR ERROR FROM THE DATA BASE 
                    // -> (NOT FILLED FIELD - ERROR-CODE 400 - BAD REQUEST)

                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // ..
                });
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
                        className={`auth-field ${touched.firstName && errors.firstName ? 'error' : ''}`}
                        onChange={handleChange}
                        value={values.firstName}
                        onBlur={handleBlur}
                    />
                    {(touched.firstName && errors.firstName) || (touched.firstName && (values.firstName.length > 0 && values.firstName.length < 2)) ?
                        (<div className='error-div'>
                            <i className="fas fa-exclamation-circle"></i>
                            <p className='register-error-text'>{errors.firstName}.</p>
                        </div>) : null
                    }
                    <input
                        id='lastName'
                        type="text"
                        placeholder='Last Name'
                        className={`auth-field ${touched.lastName && errors.lastName ? 'error' : ''}`}
                        onChange={handleChange}
                        value={values.lastName}
                        onBlur={handleBlur}
                    />
                    {(touched.lastName && errors.lastName) || (touched.lastName && values.lastName.length < 2) ?
                        (<div className='error-div'>
                            <i className="fas fa-exclamation-circle"></i>
                            <p className='register-error-text'>{errors.lastName}.</p>
                        </div>) : null
                    }
                    <input
                        id='email'
                        type="email"
                        placeholder='Email'
                        className={`auth-field ${touched.email && errors.email ? 'error' : ''}`}
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email ? 
                        (<div className='error-div'>
                            <i className="fas fa-exclamation-circle"></i>
                            <p className='register-error-text'>{errors.email}.</p>
                        </div>) : null
                    }
                    <input
                        id='password'
                        type="password"
                        placeholder='Password'
                        className={`auth-field ${touched.password && errors.password ? 'error' : ''}`}
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.password ?
                        (<div className='error-div'>
                            <i className="fas fa-exclamation-circle"></i>
                            <p className='register-error-text'>{errors.password}.</p>
                        </div>) : null
                    }

                    <p className="sign-in"><Link to={PATHS.LOGIN} className='register-sign-in-link'>Already have an Account?</Link></p>

                    <button className="auth-create-btn" type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}