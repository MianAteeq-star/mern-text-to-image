import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/authContext'
import { Outlet, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'

const ProtectedRoutes = () => {
  
  const { user, setShowLogin } = useContext(AuthContext)

  useEffect(() => {
    if (!user) {
      setShowLogin(true)
     
    }
  }, [user, setShowLogin])

  return user ? <Outlet /> : <Home/>
}

export default ProtectedRoutes