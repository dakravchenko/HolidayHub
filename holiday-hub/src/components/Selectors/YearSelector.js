import React from 'react'

function YearSelector({handleYearSelect}) {
    const options = [];
  
    for (let i = 1930; i < 2031; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
  return (
    <select onChange={(e) => handleYearSelect(e.target.value)}>
      {options}
    </select>
  )
}

export default YearSelector
