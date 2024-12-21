import React, { useContext, useState } from 'react'
import logoImage from "../assets/logo.png"
import { Link } from 'react-router-dom'
import star from "../assets/star.png"
import UserIcon from "../assets/userProfile.png"
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const { user, setShowLogin, logout, credits, getCredits } = useContext(AuthContext)
  const [showLogout, setShowLogout] = useState(false)
  console.log(credits,user)


  const handleProfileClick = () => {
    setShowLogout(!showLogout)
  }

  

  return (
    <div className='px-4 py-3 sm:px-10 md:px-20'>
      <div className='flex justify-between items-center'>
        <Link to={"/"}>
          <img src={logoImage} alt="Imagify" className='w-24 sm:w-32' />
        </Link>

        {user ? (
          <div className='flex items-center gap-4 sm:gap-6'>
            <Link to={"/buy"}>
              <div className='flex justify-center items-center bg-blue-300 rounded-full px-4 sm:px-6 py-2 sm:py-3 gap-2 sm:gap-4'>
                <img src={star} alt="star" className='w-3 h-3 sm:w-6 sm:h-6' />
                <button className='rounded-3xl font-light text-xs sm:text-base'>Credit left: {credits}</button>
              </div>
            </Link>
            <div className='flex justify-center items-center rounded-full px-4 sm:px-6 py-2 sm:py-3 gap-2 sm:gap-4 relative'>
              <button 
                className='rounded-3xl font-light text-xs sm:text-sm' 
                onClick={handleProfileClick}
              >
                Hi! <span className='capitalize'> {user?.username}</span>
              </button>
              <img 
                src={UserIcon} 
                alt="user" 
                className='w-6 h-6 sm:w-8 sm:h-8 cursor-pointer' 
                onClick={handleProfileClick}
              />
              {showLogout && (
                <button 
                  className='absolute top-full mt-2 bg-gray-100 py-1 px-4 rounded-3xl text-xs sm:text-base'
                  onClick={logout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-4 sm:gap-6'>
            <Link to={"/buy"}>
              <p className='font-light text-xs sm:text-base'>Pricing</p>
            </Link>
            <button
              className='bg-black text-white py-1.5 px-4 sm:px-10 rounded-3xl font-light text-xs sm:text-base'
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar