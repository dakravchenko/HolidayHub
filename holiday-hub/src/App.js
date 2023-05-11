import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WelcomePage from "./pages/WelcomePage";
import HolidaysByCountry from "./pages/HolidaysByCountry";
import UpcomingHolidays from "./pages/UpcomingHolidays";
import FavoriteHolidays from "./pages/FavoriteHolidays";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/public-holidays' element={<HolidaysByCountry/>}/>
      <Route path='/upcoming-holidays' element={<UpcomingHolidays/>}/>
      <Route path='/favorite-holidays' element={<FavoriteHolidays/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
