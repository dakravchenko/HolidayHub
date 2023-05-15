import React from 'react'
import Holiday from './Holiday'
import './Holidays.css'

function HolidayList({holidaysToDisplay, isSelectorSection}) {
  return (
    <>
      {holidaysToDisplay.map((holiday, index) => (
        <div className='holiday-wrapper' key={index}>
          <Holiday holiday={holiday} isSelectorSection={isSelectorSection}/>
        </div>
      ))}
    </>
  )
}

export default HolidayList