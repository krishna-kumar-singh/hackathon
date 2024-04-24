import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import './Logout.css'

export function LogoutBtn({className=''}) {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const logoutHandler=()=>{
      localStorage.removeItem("token")
      authService.logout().then(
      ()=> {
        dispatch(logout())
      }
      )
      navigate("/")
    }
  return (
  
    <div>
      <button onClick={logoutHandler} className={`btn ${className}`}>Logout</button>
    </div>
    
  )
}

export default LogoutBtn