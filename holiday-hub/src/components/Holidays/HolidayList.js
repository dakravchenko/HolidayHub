import React from 'react'
import Holiday from './Holiday'

function HolidayList({holidaysToDisplay}) {
  return (
    <>
      {holidaysToDisplay.map((holiday, index) => (
        <div key={index}>
          <Holiday holiday={holiday}/>
        </div>
      ))}
    </>
  )
}

export default HolidayList