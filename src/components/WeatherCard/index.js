// react
import React from "react";
// styles
import "./style.css";

const WeatherCard = ({ data }) => {
  console.log(data);
  return (
    <div className="weather-card">
      <div className="weather-card-main">
        <img
          src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
        />
        <div className="weather-information">
          <h2 className="weather-temperature">
            {Math.round(data?.main?.temp)}&deg;C
          </h2>
          <h2 className="weather-description">
            {data?.weather[0]?.description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
