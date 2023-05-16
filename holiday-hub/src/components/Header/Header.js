import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import imageLine from '../../img/Line1.svg';
import imageLogo from '../../img/HH.svg';

function Header() {
  return (
    <header className='header-wrapper'>
      <div className='logo header-box'>
        <Link to="/"><img src={imageLogo} alt='logo'></img></Link>
      </div>
      <div className='header-line header-box'>
      <img src={imageLine} alt='line'></img>
      </div>
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
