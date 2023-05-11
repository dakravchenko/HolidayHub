import React from 'react'
import { Link } from 'react-router-dom';
import '../Header/Header.css'

function Header() {
  return (
    <header className='header-wrapper'>
      <div className='logo header-box'></div>
      <div className='header-line header-box'></div>
      <div className='categories header-box'>
        <ul className='categories-wrapper'>
          <Link to="/public-holidays"><li>Public Holidays</li></Link>
          <Link to="/upcoming-holidays"><li>Upcoming Holidays</li></Link>
          <Link to="/favorite-holidays"><li>Favorites</li></Link>
        </ul>
      </div>
    </header>
  );
}

export default Header
