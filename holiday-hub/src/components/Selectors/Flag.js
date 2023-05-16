import React from 'react';

const Flag = ({ selectedCountry , isSelectorSection}) => {

  const countryCode = selectedCountry.toLowerCase();
  const imagePath = `https://flagcdn.com/w160/${countryCode}.png`;

  return isSelectorSection? (
    <>
      <img className='selector-section-flag' src={imagePath} alt='flag' />
    </>
  ) : (
    <>
      <img className='other-sections-flag' src={imagePath} alt='flag' />
    </>
  );
};

export default Flag;