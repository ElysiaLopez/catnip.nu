import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const navigate = useNavigate();

  const handleGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/map'); // Navigate to the /map route after successful sign-in
    } catch (error) {
      console.error("Sign in with Google failed:", error);
    }
  };

  return (
    <div className='container w-6/12 rounded-lg shadow-md'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs mt-6">
        {action === "Login" ? <div></div> : <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password pl-0">Forgot Password? <span>Click Here!</span></div>}
        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
          <button className="submit-container" onClick={handleGoogle}>Sign in With Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;