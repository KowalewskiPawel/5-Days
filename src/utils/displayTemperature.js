const displayTemperature = (timeOfTheDay) =>
  timeOfTheDay?.main.temp
    ? `${Math.trunc(timeOfTheDay?.main.temp)}°`
    : "Data Not Available";

export default displayTemperature;
