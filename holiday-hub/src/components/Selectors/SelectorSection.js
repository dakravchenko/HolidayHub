import React, {useState, useRef, useEffect} from 'react'
import CountrySelector from './CountrySelector'
import YearSelector from './YearSelector'
import HolidayList from '../Holidays/HolidayList'


function SelectorSection() {
    const [selectedCountry, setSelectedCountry] = useState('NL')
    const [selectedYear, setSelectedYear] = useState('2023')
    const [holidaysToDisplay, setHolidaysToDisplay] = useState([])
    const url = `https://date.nager.at/api/v3/PublicHolidays/${selectedYear}/${selectedCountry}`

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

    function handleCountrySelect(value){
        setSelectedCountry(value)
    }
    function handleYearSelect(value){
        setSelectedYear(value)

    }
  return (
    <>
    <div className='selector-wrapper'>
      <CountrySelector handleCountrySelect={handleCountrySelect}/>
      <YearSelector handleYearSelect={handleYearSelect}/>
    </div>
    <div><HolidayList holidaysToDisplay={holidaysToDisplay}/></div>
    </>
  )
}

export default SelectorSection
