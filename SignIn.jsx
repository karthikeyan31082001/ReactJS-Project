import React from 'react';
import './index.css';

function SignIn() {
    return (
        <div className="container">
            <div className="left-panel">
                <h1>Board.</h1>
            </div>
            <div className="right-panel">
                <div className="sign-in-box">
                    <h2>Sign In</h2>
                    <p>Sign in to your account</p>
                    <form>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" placeholder="johndoe@gmail.com" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="********" required />

                        <a href="#" className="forgot-password">Forgot password?</a>

                        <button type="submit">Sign In</button>
                    </form>
                    <p className="register">Don't have an account? <a href="#">Register here</a></p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
