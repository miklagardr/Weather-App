import React from 'react'

function showWeather({weather}) {
    
      
    
  return (
 
    <div className='flex dark:bg-gray-900 dark:text-gray-100 flex-col items-center mx-auto max-w-[500px] border p-4 border-blue-400 my-auto h-[auto] rounded-full'>
    <div className='flex justify-center '>
      <img  src={`https://openweathermap.org/img/wn/${weather.weatherIcon}@2x.png`} alt='Weather Icon' />
    </div>
    <div className='font-thin my-3'>{weather.weather}</div>
    <div className='text-4xl font-bold my-3'>{weather.temperature} °C</div>
    <div className='my-3'>Feels Like {weather.feelsLike} °C</div>
    <div className='my-3'>
      {weather.city}, {weather.country}
    </div>
</div>

   
    
  )
}

export default showWeather;