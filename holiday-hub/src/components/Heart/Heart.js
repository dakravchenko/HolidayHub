import React, { useContext} from 'react';
import { HolidayContext } from '../../context/GlobalState';
import emptyHeart from '../../img/Heart.svg';
import filledHeart from '../../img/Heart-full.svg';
import './Heart.css'

import { deepEqual } from '../../utils/deepEqual';

function Heart({ holiday, isHovered}) {
  
  const { favoriteHolidays, addFavoriteHoliday, removeFavoriteHoliday} = useContext(HolidayContext);

  const isFavorite = favoriteHolidays.some(favHoliday =>
    deepEqual(favHoliday, holiday)
  );

  const heartStyles = {
    display: isHovered ? 'block' : 'none'
  };

  return isFavorite? (
    <div className='in-favorites'>
      <img onClick={() => removeFavoriteHoliday(holiday)}src={filledHeart} alt="colored icon" />
    </div>
  ) : (
    <div className='not-in-favorites'>
      <img onClick={() => addFavoriteHoliday(holiday)} src={emptyHeart} alt="empty icon" style={heartStyles} />
    </div>
  )
  ;
}

export default Heart;