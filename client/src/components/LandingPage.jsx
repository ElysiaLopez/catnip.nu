import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import downarrow from '../assets/down-arrow-56.png';

function LandingPage() {

  return (
    <div className='hmax-screen flex flex-col items-center justify-between'>
      <div className='mb-48'>
      <h3 className="font-bold font-sans text-4xl mt-48">Share Events With</h3>
      <h1 className='font-extrabold font-sans text-6xl'>catnip.nu</h1>
      </div>
      <NavLink to="/login">
        <div className="w-4 h-4 border-l-4 border-r-4 border-transparent border-black cursor-pointer transition-transform hover:translate-y-1">
          <img className="scale-400" src={downarrow} />
        </div>
      </NavLink>
    </div>

  );
}

export default LandingPage