import SearchBar from "./components/searchBar";
import WeatherList from "./components/weatherList"; 
import { useState } from "react";
import getWeatherInfo from "./api";

function App() {
  
  const [weather , setWeather] = useState(''); 
  
  const onSubmit = async (city) => {
    try {
      const weatherResp = await getWeatherInfo(city);
      setWeather(weatherResp);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      setWeather('');
    }
  };


  return (
    <div className="App" >
      <SearchBar onSubmit = {onSubmit} /> 
      <WeatherList weather = {weather}  />
    </div>
  );
}

export default App;
