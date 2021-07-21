import React from "react";

const Card = ({ weather }) => {
  return (
    <div className="city">
      <h2 className="city-name">
        <span>{weather.name}</span>
        <sup>{weather.sys.country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(weather.main.temp)}
        <sup>&deg;C</sup>
      </div>
      <div className="city-temp">
        {Math.round(weather.main.temp * (9/5) + 32)}
        <sup>&deg;F</sup>
      </div>
      <div className="info">
        <img className="city-icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
      </div>
      <p>
        {weather.weather[0].description}
      </p>
    </div>
  )
}

export default Card;