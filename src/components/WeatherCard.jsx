import React from "react";

export default function WeatherCard({ data }) {
  const toCelsius = (k) => (k - 273.15).toFixed(1);

  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">

      <div className="weather-main">
        <h2 className="city-name">
          {data.name}, {data.sys.country}
        </h2>

        <img src={iconUrl} alt="weather icon" className="weather-icon" />

        <h1 className="temperature">{toCelsius(data.main.temp)}°C</h1>

        <p className="description">{data.weather[0].description}</p>
      </div>

      <div className="weather-details">
        <p><strong>Humidity:</strong> {data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> {data.wind.speed} m/s</p>
        <p><strong>Pressure:</strong> {data.main.pressure} hPa</p>
        <p><strong>Cloudiness:</strong> {data.clouds.all}%</p>
      </div>

    </div>
  );
}
