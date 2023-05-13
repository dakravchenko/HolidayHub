import React, {useState, useEffect} from 'react'
import Header from '../components/Header/Header'
import HolidayList from '../components/Holidays/HolidayList'


function UpcomingHolidays() {
  const [holidaysToDisplay, setHolidaysToDisplay] = useState([])
  const url ='https://date.nager.at/api/v3/NextPublicHolidaysWorldwide'

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const data = await res.json(); 
        setHolidaysToDisplay(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
}, [url]);
  return (
    <>
      <Header/>
      <div className='holidays-list'><HolidayList holidaysToDisplay={holidaysToDisplay}/></div>
    </>
  )
}

export default UpcomingHolidays
