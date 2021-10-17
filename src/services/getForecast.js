const getForecast = (cityName) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => data);
};

export default getForecast;
