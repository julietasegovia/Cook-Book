import React from 'react'
import homeIcon from "./assets/home.png";
import personIcon from "./assets/auth.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div className='flex justify-around pt-10'>
        <Link to="/">
            <div className='flex items-center justify-center gap-3 cursor-pointer'>
                <img src={homeIcon} alt='Home icon' className='cursor-pointer [filter:invert(55%)_sepia(80%)_saturate(1200%)_hue-rotate(5deg)_brightness(103%)_contrast(95%)] h-10'/>
                <p className='text-xl pt-3 hover:text-yellow-500'>CookBook</p>
            </div>
        </Link>
        <div className='flex gap-32 pl-16 pt-3'>
            <Link to="/search">
                <p className='font-semibold cursor-pointer hover:text-yellow-500'>Search</p>
            </Link>
        </div>
        <div className='flex gap-5 items-center'>
            <img src={personIcon} alt='Person icon' className='[filter:invert(55%)_sepia(80%)_saturate(1200%)_hue-rotate(5deg)_brightness(103%)_contrast(95%)] h-7'/>
            <div className='flex gap-10'>
                <p className='font-semibold cursor-pointer hover:text-yellow-500'>Log In</p>
                <p className='font-semibold cursor-pointer hover:text-yellow-500'>Register</p>
            </div>
        </div>
    </div>
  )
}

export default Header
