import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  fname: Yup.string().required('Name is required'),
  pnumber: Yup.string().matches(/^\+?\d{10,15}$/, 'Enter a valid phone number (10–15 digits)').required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  role: Yup.string().required('Role is required'),
})