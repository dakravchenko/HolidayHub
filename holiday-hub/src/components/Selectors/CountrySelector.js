import React, {useState, useEffect} from 'react'
import './Selectors.css'

function CountrySelector({handleCountrySelect, countryRef}) {
    const [countriesData, setCountriesData] = useState([])
    const url = 'https://date.nager.at/api/v3/AvailableCountries'
  
    
    useEffect(() => {
        (async () => {
          try {
            const res = await fetch(url);
            const data = await res.json(); 
            setCountriesData(data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        })();
    }, []);
  return (
    <select value={countryRef.current} onChange={e => handleCountrySelect(e.target.value)}>
     {countriesData.map(country => (
        <option key={country.countryCode} value={country.countryCode} label={country.name}>{country.name}</option>
        
     ))
     
     }
     
    </select>
  )
}

export default CountrySelector
