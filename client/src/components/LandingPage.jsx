import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import downarrow from '../assets/down-arrow-56.png';
import logo from '../assets/catnip.png';
import '../assets/LandingPage.css';

function LandingPage() {

  return (
    <div className='hmax-screen flex flex-col items-center justify-between'>
      <div className='mb-40'>
      <h3 className="font-bold font-sans text-4xl mt-48 mb-0 text-secondary welcome">Share Events With</h3>
      <img src={logo} alt="logo" className="w-64 m-auto p-0 welcome" />
      </div>
      <NavLink to="/login">
        <div className="welcome w-4 h-4 border-l-4 border-r-4 border-transparent border-black cursor-pointer transition-transform hover:translate-y-2">
          <img className="scale-500 transition ease-in-out duration-200" src={downarrow} />
        </div>
      </NavLink>
    </div>

  );
}

export default LandingPage