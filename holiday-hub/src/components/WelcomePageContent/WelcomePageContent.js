import React from 'react'
import '../WelcomePageContent/WelcomePageContent.css'
import { Link } from 'react-router-dom'

function WelcomePageContent() {

  return (
    <>
        <div className='welcome-page-wrapper'>
            <div className='welcome-page-content welcome-page'>
                <h1>Discover with HolidayHub</h1>
                <Link to="/public-holidays"><button>Discover</button></Link>
            </div>
            <div className='welcome-page-pic welcome-page'>
                <img src='../../../public/img/planet.svg' alt='planet'></img>
                <img src="holiday-hub\public\img\Planet.png" alt='planet'></img>
            </div>
        </div>
    </>
  )
}

export default WelcomePageContent
