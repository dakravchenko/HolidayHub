import React from 'react'
import '../Header/Header.css'

function Header() {
  return (
    <header className='header-wrapper'>
      <div className='logo header-box'></div>
      <div className='header-line header-box'></div>
      <div className='categories header-box'>
        <ul className='categories-wrapper'>
          <li>Public Holidays</li>
          <li>Upcoming Holidays</li>
          <li>Favorites</li>
        </ul>
      </div>
    </header>
  );
}

export default Header
