import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import Login from '../Login';
import LogoutBtn from './LogoutBtn';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  const openLoginModal = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };
  const authStatus = useSelector((state) => state.auth.status)

  // const authStatus= useSelector((state)=> state.auth.status)
  const navigate=useNavigate()

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar mx-0'>
        <Link to='/' className='navbar-logo text-3xl font-serif text-green-500' onClick={closeMobileMenu}>
          Life Assist
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          {authStatus && (<li className='nav-item'>
            <Link
              to='/patient-request'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Requests
            </Link>
          </li>)}
          <li className='nav-item'>
            <Link
              to='/ambulance-availability'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Ambulance Availability
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          

        
         
        </ul>

        {!authStatus && (
        <Link to={'/signup'}>
          <Button className=' transition-all bg-yellow-500 text-black duration-300 ease-out hover:bg-transparent hover:text-white hover:border-primary  hover:rounded-md hover:border-yellow-500 hover:border-2 hover:border-solid'>Sign up</Button>
        </Link>
          )}

        {!authStatus && (
        <Link to={'/login'}>
          <Button className=' transition-all bg-green-500 duration-300 ease-out hover:bg-transparent hover:text-white hover:border-primary  hover:rounded-md hover:border-green-500 hover:border-2 hover:border-solid'>Login</Button>
        </Link>
        )}
        {authStatus && (
          <li className='nav-item ml-4'>
            <LogoutBtn  className='transition-all bg-red-500 duration-300 ease-out hover:bg-transparent hover:text-white hover:border-primary  hover:rounded-md hover:border-red-500 hover:border-2 hover:border-solid'/>
          </li> 
        )}

      </nav>
    </>
  );
  
}

export default Navbar;