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
    case "CACHED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        forecast: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};

const useFetchForecast = (cityNameAndUnits) => {
  const [cityAndUnits, setCityAndUnits] = useState(cityNameAndUnits);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    forecast: {},
  });

  useEffect(() => {
    const fetchForecast = () => {
      dispatch({ type: "FETCH_INIT" });

      const isCached = sessionStorage.getItem(cityAndUnits);

      if (isCached) {
        return dispatch({ type: "CACHED", payload: JSON.parse(isCached) });
      }

      getForecast(cityAndUnits)
        .then((data) => {
          if (data.cod === "404") {
            sessionStorage.setItem(cityAndUnits, JSON.stringify(data));
            return dispatch({ type: "NOT_FOUND", payload: data });
          }
          sessionStorage.setItem(cityAndUnits, JSON.stringify(data));
          return dispatch({ type: "FETCH_SUCCESS", payload: data });
        })
        .catch(() => dispatch({ type: "FETCH_FAILURE" }));
    };

    fetchForecast();
  }, [cityAndUnits]);

  return [state, setCityAndUnits];
};

export default useFetchForecast;
