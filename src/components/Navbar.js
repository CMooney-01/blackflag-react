import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import gymLogo from './gym-logo.jpg';

//Link works similar to href= but you use to= for routing
function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img className='navbar-logo' src={gymLogo} />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/membership' className='nav-links' onClick={closeMobileMenu}>
              membership
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
              events
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
              contact us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/physiotherapy' className='nav-links' onClick={closeMobileMenu}>
              physiotherapy
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
