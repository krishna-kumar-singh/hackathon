// import { useEffect, useState } from "react"
// import {useDispatch} from 'react-redux'
// import authService from "./appwrite/auth"
// import {login,logout} from './store/authSlice'
import {Outlet} from 'react-router-dom'
import {Footer } from './components/index'
import Navbar from './components/header/Navbar'
import React from 'react'
function App() {
  
  
  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className=" w-full block">
        <Navbar/>
        <main>
         <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default App
