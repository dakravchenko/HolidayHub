import React from 'react'
import Header from '../components/Header/Header'

const WelcomePage = () => {
  return (
    <>
      <Header/>
      <div className='welcome-page-wrapper'>
        <div className='welcome-page-content'>
            <h1>Discover with HolidayHub</h1>
            <button>Discover</button>
        </div>
        <div className='welcome-page-pic'>
            <img src='' alt=''></img>
        </div>
      </div>
    </>
  )
}

export default WelcomePage
