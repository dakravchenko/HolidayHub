import React, {useState} from 'react'
import './Holidays.css'
import Heart from '../Heart/Heart'
import Flag from '../Selectors/Flag';

function Holiday({holiday, isSelectorSection}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return isSelectorSection? (
    <>
      <div className='date-container holiday'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <p>{holiday.date}</p>
      </div>
      <div className='name-container holiday'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <p>{holiday.name} | <span className='local-name'>{holiday.localName}</span></p>
        <div className='heart-container'>
          <Heart 
          holiday={holiday}
          isHovered={isHovered}/>
        </div>
      </div>
    </>
  ) : (
    <>
    <div className='country-container'>
       <Flag selectedCountry={holiday.countryCode}/>
    </div>
      <div className='date-container holiday'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <p>{holiday.date}</p>
      </div>
      <div className='name-container holiday'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <p>{holiday.name} | <span className='local-name'>{holiday.localName}</span></p>
        <div className='heart-container'>
          <Heart 
          holiday={holiday}
          isHovered={isHovered}/>
        </div>
      </div>
    </>
  )
}

export default Holiday
