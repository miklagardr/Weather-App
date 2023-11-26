import React from 'react'
import ShowWeather from "../components/showWeather"; 
function weatherList({weather}) {

  return <div >{weather && <ShowWeather weather={weather} />}</div>;
}

export default weatherList