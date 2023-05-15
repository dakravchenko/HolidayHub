import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Flag = ({selectedCountry}) => {
    const [flagImageUrl, setFlagImageUrl] = useState()

  useEffect(() => {
    (async () => {
      const options = {
        method: 'GET',
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${selectedCountry}`,
        headers: {
          'X-RapidAPI-Key': '9ccfe931aamshf70cd0fb3b41773p13e441jsndac4f1afa291',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        setFlagImageUrl(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [selectedCountry]);

  return (
    <>
        <img src={flagImageUrl} alt='flag'></img>
    </>
  );
};

export default Flag;