import React from 'react'
import './Holidays.css'

function Holiday({holiday, isSelectorSection}) {
  return isSelectorSection === true ? (
    <>
      <div className='date-container holiday'>
        <p>{holiday.date}</p>
      </div>
      <div className='name-container holiday'>
        <p>{holiday.name} | <span className='local-name'>{holiday.localName}</span></p>
      </div>
    </>
  ) : (
    <>
    <div className='country-container'>
       <p>{holiday.countryCode}</p>
    </div>
      <div className='date-container holiday'>
        <p>{holiday.date}</p>
      </div>
      <div className='name-container holiday'>
        <p>{holiday.name} | <span className='local-name'>{holiday.localName}</span></p>
      </div>
    </>
  )
}

export default Holiday
