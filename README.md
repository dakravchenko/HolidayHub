# HolidayHub

This is a React app where you can find info regarding public holidays worldwide

[Click Here](https://date.nager.at/) is used to fetch data

## Try it out

[Click Here](https://lucky-squirrel-abf1d1.netlify.app)


## Features

- Select year and country to display public holidays
- Explore upcoming public holidays for next 7 days
- Create a list of your favorite holidays

## Folder Structure
```text

└── src
    └── app.js
    └── 
    └── pages
        └── WelcomePage.js
        └── FavoriteHolidays.js
        └── HolidaysByCountry.js
        └── ExpectedHolidays.js
    └── components
        └── Header
        └── Heart
        └── Holidays
        └── Selectors
        └── Holidays
        └── WelcomePageContent
        
    └── context
    └── utils
    └── hooks
        
```

## Must_haves

- customised hooks (to fetch data)
- basic hooks (useState, useEffect, useRef)
- GlobalState
- list of favorite holidays (holidays can be added as favorites from different pages)
- local storage (current selected country and the year will be added to local storage, as well as favorite holidays)

## nice to have
- responsive design
- tests using React Tests Library
