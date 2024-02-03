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
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i class='fab fa-firstdraft' />
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
              to='/recuitment-applications'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Recuitment-applications
            </Link>
          </li>)}
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          {authStatus && (
          <li className='nav-item'>
            <LogoutBtn  className='transition-all bg-red-500 duration-300 ease-out hover:bg-transparent hover:text-white hover:border-primary  hover:rounded-md hover:border-red-500 hover:border-2 hover:border-solid'/>
          </li>
          )}

        
         
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
        
        {showLogin && (
        <div className='z-50'>
        <Login onClose={closeLoginModal} />
        </div>
      )}

      </nav>
    </>
  );
  
}

export default Navbar;