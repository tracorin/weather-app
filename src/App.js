// react
import React from "react";
// components
import WeatherCard from "./components/WeatherCard";
import InformationCard from "./components/InformationCard";
// hooks
import useGetWeather from "./hooks/useGetWeather";
// libraries
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
// styles
import "./App.css";

const App = () => {
  const { searchCity, data, isLoading, setSearchCity } = useGetWeather();

  return (
    <div className="app">
      <div className="app-header">
        <h1 className="logo">Weather app</h1>
        <div className="app-input">
          <input
            id="city"
            name="city"
            type="text"
            onChange={(e) => setSearchCity(e.target.value)}
            value={searchCity}
            className="input"
            placeholder="Enter your city"
          />
        </div>
      </div>
      <div className="app-information">
        {isLoading ? (
          <div className="spinner">
            <Spinner size={30} color={"blue"} />
          </div>
        ) : (
          <div className="information">
            <h2 className="title">
              {data?.name}, {data?.sys?.country}
            </h2>
            <div className="information-cards">
              <WeatherCard data={data} />
              <InformationCard data={data} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
