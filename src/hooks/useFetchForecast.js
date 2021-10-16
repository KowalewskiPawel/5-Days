import { useEffect, useState, useReducer } from "react";
import getForecast from "../services/getForecast";

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        forecast: action.payload,
      };
    case "NOT_FOUND":
      return {
        ...state,
        isLoading: false,
        isError: true,
        forecast: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

const useFetchForecast = (initialCityName) => {
  const [cityName, setCityName] = useState(initialCityName);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    forecast: {},
  });

  useEffect(() => {
    const fetchForecast = () => {
      dispatch({ type: "FETCH_INIT" });

      getForecast(cityName)
        .then((data) => {
          if (data.cod === "404") {
            return dispatch({ type: "NOT_FOUND", payload: data });
          }

          return dispatch({ type: "FETCH_SUCCESS", payload: data });
        })
        .catch(() => dispatch({ type: "FETCH_FAILURE" }));
    };

    fetchForecast();
  }, [cityName]);

  return [state, setCityName];
};

export default useFetchForecast;
