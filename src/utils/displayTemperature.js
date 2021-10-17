import convertCtoF from "./convertCtoF";

const displayTemperature = (timeOfTheDay = null, units, averageTemp = null) => {
  if (timeOfTheDay) {
    return timeOfTheDay?.main.temp && units === "metric"
      ? `${Math.trunc(timeOfTheDay?.main.temp)} C°`
      : `${Math.trunc(convertCtoF(timeOfTheDay?.main.temp))} F°`;
  }

  return units === "metric"
    ? `${averageTemp} C°`
    : `${Math.trunc(convertCtoF(averageTemp))} F°`;
};

export default displayTemperature;
