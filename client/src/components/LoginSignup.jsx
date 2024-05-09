import React, { useState } from 'react';
import './LoginSignup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import axios  from "axios"

const LoginSignup = () => {

    const[action,setAction] = useState("Login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const login = async () => {
        
        try{
            const response = await axios.post(`http://localhost:5050/login`, {
                email, password
            })
            console.log(response)
        }catch(e){
            console.log(e)
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
  
    return (
    <div className='container w-6/12 rounded-lg shadow-md'>
        <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
        <div className="inputs mt-6">
            {action=="Login"?<div></div>: <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
            </div>}
           
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </div>
            {action=="Sign Up"?<div></div>:<div className="forgot-password pl-0">Forgot Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{login()}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{login()}}>Login</div>

                {/* if "Login" and Login, click shouild navigate to Map page. */}
            </div>
        </div>
    </div>
  )
}

export default LoginSignup