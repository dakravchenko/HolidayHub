import React from 'react';
import Header from '../components/Header/Header';
import HolidayList from '../components/Holidays/HolidayList';
import useFetch from '../hooks/useFetch';

function UpcomingHolidays() {
  const { data: holidaysToDisplay, loading, error } = useFetch('https://date.nager.at/api/v3/NextPublicHolidaysWorldwide');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <div className='holidays-list'>
        <HolidayList holidaysToDisplay={holidaysToDisplay} />
      </div>
    </>
  );
}

export default UpcomingHolidays;