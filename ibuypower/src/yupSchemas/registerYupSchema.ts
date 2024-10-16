import * as Yup from 'Yup';

const validateNames = /^[A-Za-z]+(-[A-Za-z]+)?[A-Za-z]*\s*$/;

export const registerYupSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(15, 'First Name cannot exceed 15 characters')
        .min(2, 'First Name must be at least 2 characters')
        .matches(validateNames, 'Invalid First Name'),
        // .required('First Name is required'),
    lastName: Yup.string()
        .max(15, 'Last Name cannot exceed 15 characters')
        .min(2, 'Last Name must be at least 2 characters')
        .matches(validateNames, 'Invalid Last Name'),
        // .required('Last Name is required'),
    email: Yup.string()
        .email('Invalid email'),
        // .required('Email is Required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(20, 'Password cannot exceed 20 characters'),
        // .required('Password is required'),
})