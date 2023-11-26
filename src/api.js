import axios from "axios";

const getWeatherInfo = async (city) => {

  const apikey = '';  // Paste your own OpenWeather API key within the quotes.

  try {
 
    const locations = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}`);

    if (!locations.data || !locations.data.length) {
      throw new Error(`Location data not found for ${city}`);
    }

  
    const { lat, lon } = locations.data[0];

    
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`);



    return {
      city: response.data.name,
      country: response.data.sys.country,
      weather: response.data.weather[0].main,
      temperature: Math.round(response.data.main.temp - 273.15),
      feelsLike: Math.round(response.data.main.feels_like - 273.15),
      weatherIcon: response.data.weather[0].icon,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw error; 
  }
};

export default getWeatherInfo;
