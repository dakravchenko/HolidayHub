import React, {useContext} from 'react'
import Header from '../components/Header/Header'
import { HolidayContext } from '../context/GlobalState';
import HolidayList from '../components/Holidays/HolidayList';

function FavoriteHolidays() {

  const { favoriteHolidays} = useContext(HolidayContext);

  return favoriteHolidays.length !== 0?(
    <>
      <Header/>
      <HolidayList holidaysToDisplay={favoriteHolidays}/>
    </>
  ) : (
    <>
      <Header/>
      <div class="empty-favorites">
      <p>Nothing to display</p>
      </div>
    </>
  )
}

export default FavoriteHolidays
