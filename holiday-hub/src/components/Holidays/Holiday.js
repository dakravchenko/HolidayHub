import React from 'react'

function Holiday({holiday}) {
  return (
    <>
      <div className='date-container'>
        <p>{holiday.date}</p>
      </div>
      <div className='name-container'>
        <p>{holiday.name} | <span className='local-name'>{holiday.localName}</span></p>
      </div>
    </>
  )
}

export default Holiday
