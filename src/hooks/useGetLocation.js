// react
import { useState, useEffect } from "react";
// libraries
import axios from "axios";

const useGetLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const response = await axios.get("https://geolocation-db.com/json/");
      setLocation(response.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useGetLocation;
