import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./styles.css";

const API_KEY = "ed772587ae8c964e7c7b952398cc8f55";

export default function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      const response = await axios.get(url);

      setWeather(response.data);
      setError("");
    } catch (err) {
      console.log(err); // helpful for debugging
      setError("City not found. Try again.");
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Weather Forecast</h1>

      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />

      {error && <p className="error">{error}</p>}

      {weather && <WeatherCard data={weather} />}
    </div>
  );
}
