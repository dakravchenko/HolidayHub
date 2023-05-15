import React, { createContext, useState, useEffect, useRef } from 'react';
import { deepEqual } from '../utils/deepEqual';

export const HolidayContext = createContext();

export const HolidayProvider = ({ children }) => {
  const [favoriteHolidays, setFavoriteHolidays] = useState(() => {
    const storedFavoriteHolidays = localStorage.getItem('favoriteHolidays') 
    return storedFavoriteHolidays.length > 0 ? JSON.parse(storedFavoriteHolidays) : []
  });
  const favoriteHolidaysRef = useRef(favoriteHolidays);

  useEffect(() => {
    favoriteHolidaysRef.current = favoriteHolidays;
    localStorage.setItem('favoriteHolidays', JSON.stringify(favoriteHolidays));
  }, [favoriteHolidays]);

  useEffect(() => {
    const storedFavoriteHolidays = localStorage.getItem('favoriteHolidays');
    if (storedFavoriteHolidays) {
      setFavoriteHolidays(JSON.parse(storedFavoriteHolidays));
    }
  }, []);

  const addFavoriteHoliday = (holiday) => {
    const existingHoliday = favoriteHolidaysRef.current.find(
      (favHoliday) => deepEqual(favHoliday, holiday)
    );

    if (existingHoliday) {
      console.log('Holiday already added as favorite.');
      return;
    }

    setFavoriteHolidays([...favoriteHolidaysRef.current, holiday]);
    console.log('Holiday added as favorite.');
  };

  const removeFavoriteHoliday = (holiday) => {
    const updatedHolidays = favoriteHolidaysRef.current.filter(
      (favHoliday) => !deepEqual(favHoliday, holiday)
    );

    setFavoriteHolidays(updatedHolidays);
    console.log('Holiday removed from favorites.');
  };

  const contextValue = {
    favoriteHolidays,
    addFavoriteHoliday,
    removeFavoriteHoliday,
  };

  return (
    <HolidayContext.Provider value={contextValue}>
      {children}
    </HolidayContext.Provider>
  );
};