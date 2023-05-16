import React, { createContext, useState, useEffect, useRef } from 'react';
import { deepEqual } from '../utils/deepEqual';

export const HolidayContext = createContext();

export const HolidayProvider = ({ children }) => {
  const [favoriteHolidays, setFavoriteHolidays] = useState(() => {
    const storedFavoriteHolidays = localStorage.getItem('favoriteHolidays');
    return storedFavoriteHolidays ? JSON.parse(storedFavoriteHolidays) : [];
  });
  const favoriteHolidaysRef = useRef(favoriteHolidays);

  useEffect(() => {
    favoriteHolidaysRef.current = favoriteHolidays;
    localStorage.setItem('favoriteHolidays', JSON.stringify(favoriteHolidays));
  }, [favoriteHolidays]);

  const addFavoriteHoliday = (holiday) => {
    setFavoriteHolidays((prevFavoriteHolidays) => {
      const isExistingHoliday = prevFavoriteHolidays.some((favHoliday) =>
        deepEqual(favHoliday, holiday)
      );

      if (isExistingHoliday) {
        alert('Holiday already added as a favorite.');
        return prevFavoriteHolidays;
      }

      const updatedHolidays = [...prevFavoriteHolidays, holiday];
      return updatedHolidays;
    });
  };

  const removeFavoriteHoliday = (holiday) => {
    setFavoriteHolidays((prevFavoriteHolidays) => {
      const updatedHolidays = prevFavoriteHolidays.filter(
        (favHoliday) => !deepEqual(favHoliday, holiday)
      );
      return updatedHolidays;
    });
  };

  const contextValue = {
    favoriteHolidays,
    addFavoriteHoliday,
    removeFavoriteHoliday,
  };

  useEffect(() => {
    const storedFavoriteHolidays = localStorage.getItem('favoriteHolidays');
    if (storedFavoriteHolidays) {
      setFavoriteHolidays(JSON.parse(storedFavoriteHolidays));
    }
  }, []);

  return (
    <HolidayContext.Provider value={contextValue}>
      {children}
    </HolidayContext.Provider>
  );
};