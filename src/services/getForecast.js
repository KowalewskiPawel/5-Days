const getForecast = (cityName, units = "metric") => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${units}&appid=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data);
};

export default getForecast;
