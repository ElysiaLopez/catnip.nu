import React, { useState } from 'react';

import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
                {action === "Sign Up" ? 
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="Confirm Password" />
                    </div> : 
                    <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
                }

                <div className="submit-container">
                    <div className="submit" onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
