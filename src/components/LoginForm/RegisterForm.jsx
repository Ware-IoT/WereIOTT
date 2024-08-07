// src/components/RegisterForm/RegisterForm.jsx
import React from 'react';
import '../../dist/css/main.css';

const RegisterForm = () => {
    return (
        <div className='wrapper'>
            <form>
                <h2>Register Form</h2>
                <div className='input-box'>
                    <input type="text" placeholder='Full Name' required />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type="email" placeholder='Email' required />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Confirm Password' required />
                </div>
                <button type='submit'>Register</button>
                <div className='login-link'>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
