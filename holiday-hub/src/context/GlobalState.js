import React, { createContext, useState } from 'react';
import { deepEqual } from '../utils/deepEqual';

export const HolidayContext = createContext();

export const HolidayProvider = ({ children }) => {
  const [favoriteHolidays, setFavoriteHolidays] = useState([]);

  const addFavoriteHoliday = (holiday) => {
    // Check if the holiday already exists in favorites
    const existingHoliday = favoriteHolidays.find(
      (favHoliday) => deepEqual(favHoliday, holiday)
    );

    if (existingHoliday) {
      console.log('Holiday already added as favorite.');
      return;
    }

    setFavoriteHolidays([...favoriteHolidays, holiday]);
    console.log('Holiday added as favorite.');
  };

  const removeFavoriteHoliday = (holiday) => {
    const updatedHolidays = favoriteHolidays.filter(
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