import React, {useState, useRef, useEffect} from 'react'
import CountrySelector from './CountrySelector'
import YearSelector from './YearSelector'
import HolidayList from '../Holidays/HolidayList'
import Flag from './Flag'
import './Selectors.css'


function SelectorSection() {
  const [selectedCountry, setSelectedCountry] = useState(() => {
    const storedCountry = localStorage.getItem('country');
    return storedCountry ? JSON.parse(storedCountry) : 'NL';
  });
  const [selectedYear, setSelectedYear] = useState(() => {
    const storedYear = localStorage.getItem('year');
    return storedYear ? JSON.parse(storedYear) : 2023;
  });
    const [holidaysToDisplay, setHolidaysToDisplay] = useState([])
    const [isSelectorSection, setIsSelectorSection] = useState(true) //is this the only way? because i dont need to setIsSelectorSection
    const countryRef = useRef('')
    const yearRef = useRef('')

    useEffect(() => {
      const storedCountry = localStorage.getItem('country');
      if (storedCountry) {
       countryRef.current = JSON.parse(storedCountry);
       setSelectedCountry(countryRef.current)
      }
    }, []);

    useEffect(() => {
      const storedYear = localStorage.getItem('year');
      if (storedYear) {
        yearRef.current = JSON.parse(storedYear);
        setSelectedYear(yearRef.current)
      }
    }, []);

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
        countryRef.current = value
        localStorage.setItem('country', JSON.stringify(value))
        setSelectedCountry(value)
    }
    function handleYearSelect(value){
        yearRef.current = value
        localStorage.setItem('year', JSON.stringify(value))
        setSelectedYear(value)

    }
  return (
    <>
    <div className='selector-wrapper'>
      <CountrySelector countryRef={countryRef}handleCountrySelect={handleCountrySelect}/>
      <YearSelector yearRef={yearRef} handleYearSelect={handleYearSelect}/>
    </div>
    <div className='content-wrapper'>
      <div className='flag-container'>
        <Flag selectedCountry={selectedCountry}/>
      </div>
      <div className='holidays-list'><HolidayList holidaysToDisplay={holidaysToDisplay} isSelectorSection={isSelectorSection}/></div>
    </div>
    </>
  )
}

export default SelectorSection
