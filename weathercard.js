import React from "react";

const WeatherCard = ({ weatherData }) => {
  const {
    name,
    main: { temp, humidity },
    wind: { speed },
  } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {temp} K</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
