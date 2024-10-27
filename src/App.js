import "./styles.css";

import React, { useState } from "react";
import Search from " ./search.js";
import WeatherCard from "./weathercard.js";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=<span class="math-inline"><1\>\{city\}&appid\=</span>{process.env.REACT_APP_API_KEY}`;
    try {
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="app">
      <Search setCity={setCity} fetchWeather={fetchWeather} />
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
