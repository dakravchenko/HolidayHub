import React, { useState, useRef, useEffect } from 'react';
import CountrySelector from './CountrySelector';
import YearSelector from './YearSelector';
import HolidayList from '../Holidays/HolidayList';
import Flag from './Flag';
import './Selectors.css';
import useFetch from '../../hooks/useFetch'

function SelectorSection() {
  const [selectedCountry, setSelectedCountry] = useState(() => {
    const storedCountry = localStorage.getItem('country');
    return storedCountry ? JSON.parse(storedCountry) : 'NL';
  });
  const [selectedYear, setSelectedYear] = useState(() => {
    const storedYear = localStorage.getItem('year');
    return storedYear ? JSON.parse(storedYear) : 2023;
  });
  const isSelectorSection = true;
  const countryRef = useRef('');
  const yearRef = useRef('');

  useEffect(() => {
    const storedCountry = localStorage.getItem('country');
    if (storedCountry) {
      countryRef.current = JSON.parse(storedCountry);
      setSelectedCountry(countryRef.current);
    }
  }, []);

  useEffect(() => {
    const storedYear = localStorage.getItem('year');
    if (storedYear) {
      yearRef.current = JSON.parse(storedYear);
      setSelectedYear(yearRef.current);
    }
  }, []);

  const url = `https://date.nager.at/api/v3/PublicHolidays/${selectedYear}/${selectedCountry}`;
  const { data: holidaysToDisplay, loading, error } = useFetch(url);

  useEffect(() => {
    countryRef.current = selectedCountry;
    localStorage.setItem('country', JSON.stringify(selectedCountry));
  }, [selectedCountry]);

  useEffect(() => {
    yearRef.current = selectedYear;
    localStorage.setItem('year', JSON.stringify(selectedYear));
  }, [selectedYear]);

  function handleCountrySelect(value) {
    setSelectedCountry(value);
  }

  function handleYearSelect(value) {
    setSelectedYear(value);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className='selector-wrapper'>
        <CountrySelector countryRef={countryRef} handleCountrySelect={handleCountrySelect} />
        <YearSelector yearRef={yearRef} handleYearSelect={handleYearSelect} />
      </div>
      <div className='content-wrapper'>
        <div className='flag-container'>
          <Flag selectedCountry={selectedCountry} isSelectorSection={isSelectorSection} />
        </div>
        <div className='holidays-list'>
          <HolidayList holidaysToDisplay={holidaysToDisplay} isSelectorSection={isSelectorSection} />
        </div>
      </div>
    </>
  );
}

export default SelectorSection;