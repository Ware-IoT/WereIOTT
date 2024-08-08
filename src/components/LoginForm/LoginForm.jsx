import React from 'react';
import './LoginStyle.css';

const LoginForm = () => {
    return (
        <div className="login-wrapper">
            <form className="login-form">
                <div className="login-container">
                    <div className="login-title">
                        <h2>Login</h2>
                        <h5 id='login-sub-title'>connect straight to your account</h5>
                    </div>
                    <div className="login-input">
                        <input type="email" placeholder="Email" required />
                    </div>
                    <div className="login-input">
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className="login-essentials">
                        <div className="remember-me">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" id='remember-title'>Remember me</label>
                        </div>
                        <div className="forgot-password">
                            <span>Forgot password?</span>
                        </div>
                    </div>
                    <div className="login-button-submit">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
