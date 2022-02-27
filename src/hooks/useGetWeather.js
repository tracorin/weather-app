// react
import { useState, useEffect } from "react";
// config
import { BASE_URL, API_KEY } from "../config";
// hooks
import useGetLocation from "./useGetLocation";
// libraries
import axios from "axios";

const useGetWeather = () => {
  const location = useGetLocation();

  const [searchCity, setSearchCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (city) => {
    try {
      setIsLoading(true);

      const response = await axios.get(
        `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (response && response.data) {
        setError(null);
        setData(response.data);
        setIsLoading(false);
      }
    } catch (e) {
      setError(e.response.data.message);
    }
  };

  useEffect(() => {
    if (location.city && !searchCity) {
      getData(location.city);
    } else {
      const timeout = setTimeout(() => getData(searchCity), 1000);
      return () => clearTimeout(timeout);
    }
  }, [location, searchCity]);

  return { setSearchCity, searchCity, data, error, isLoading };
};

export default useGetWeather;
