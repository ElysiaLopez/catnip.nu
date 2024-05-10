import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import axios from 'axios';
import Popup from 'reactjs-popup';

const LoginSignup = () => {
    const [action, setAction] = useState('Sign Up');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignupPopup, setShowSignupPopup] = useState(false);
    const [showSignupFailedPopup, setShowSignupFailedPopup] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showLoginFailedPopup, setShowLoginFailedPopup] = useState(false);

    const login = async () => {
        try {
            const response = await axios.post(`http://localhost:5050/login`, {
                email,
                password,
            });
            console.log(response);
            setShowLoginPopup(true);
        } catch (e) {
            console.log(e);
            setShowLoginFailedPopup(true)
        }
    };

    const signup = async () => {
        try {
            const response = await axios.post(`http://localhost:5050/signup`, {
                name,
                email,
                password,
            });
            console.log(response);
            // Clear form fields after successful sign-up
            setName('');
            setEmail('');
            setPassword('');
            setShowSignupPopup(true);
        } catch (e) {
            console.log(e);
            setShowSignupFailedPopup(true)
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleAction = () => {
        setAction(action === 'Sign Up' ? 'Login' : 'Sign Up');
    };

    return (
        <div className="container w-6/12 rounded-lg shadow-md">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs mt-6">
                {action === 'Sign Up' && (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                )}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {action === 'Login' && (
                    <div className="forgot-password pl-0">
                        Forgot Password? <span>Click Here!</span>
                    </div>
                )}
                <div className="submit-container">
                    <div
                        className={`submit ${action === 'Sign Up' ? 'active' : 'gray'}`}
                        onClick={action === 'Sign Up' ? signup : toggleAction}
                    >
                        Sign Up
                    </div>
                    <div
                        className={`submit ${action === 'Login' ? 'active' : 'gray'}`}
                        onClick={action === 'Login' ? login : toggleAction}
                    >
                        Login
                    </div>
                </div>
            </div>
            <Popup open={showSignupPopup} onClose={() => setShowSignupPopup(false)}>
                <div className="popup-content">
                    <button className="close-button" onClick={() => setShowSignupPopup(false)}>&times;</button>
                    <h3>Sign Up Successful!</h3>
                    <p>Thank you for signing up.</p>
                </div>
            </Popup>

            <Popup open={showLoginPopup} onClose={() => setShowLoginPopup(false)}>
                <div className="popup-content">
                    <button className="close-button" onClick={() => setShowLoginPopup(false)}>&times;</button>
                    <h3>Login Successful!</h3>
                    <p>Welcome back!</p>
                </div>
            </Popup>

            <Popup open={showLoginFailedPopup} onClose={() => setShowLoginFailedPopup(false)}>
                <div className="popup-content">
                    <button className="close-button" onClick={() => setShowLoginFailedPopup(false)}>&times;</button>
                    <h3>Login failed</h3>
                </div>
            </Popup>
            <Popup open={showSignupFailedPopup} onClose={() => setShowSignupFailedPopup(false)}>
                <div className="popup-content">
                    <button className="close-button" onClick={() => setShowSignupFailedPopup(false)}>&times;</button>
                    <h3>Signup failed</h3>
                </div>
            </Popup>
        </div>
    );
};

export default LoginSignup;