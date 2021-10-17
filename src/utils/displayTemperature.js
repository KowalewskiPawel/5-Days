import convertCtoF from "./convertCtoF";

const displayTemperature = (timeOfTheDay, units) => {
  if (typeof timeOfTheDay === "undefined") {
    return "Data Not Available";
  }
  return timeOfTheDay?.main.temp && units === "metric"
    ? `${Math.trunc(timeOfTheDay?.main.temp)} C°`
    : `${Math.trunc(convertCtoF(timeOfTheDay?.main.temp))} F°`;
};

export default displayTemperature;
