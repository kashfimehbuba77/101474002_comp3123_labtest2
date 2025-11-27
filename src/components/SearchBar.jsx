import React from "react";

export default function SearchBar({ city, setCity, fetchWeather }) {
  return (
    <div className="search-container">
      <input
        type="text"
        value={city}
        placeholder="Enter city name..."
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
      />
      <button onClick={fetchWeather} className="search-btn">
        Search
      </button>
    </div>
  );
}
