import convertCtoF from "./convertCtoF";

const displayAvgTemperature = (averageTemp, units) =>
  units === "metric"
    ? `${averageTemp} C°`
    : `${Math.trunc(convertCtoF(averageTemp))} F°`;

export default displayAvgTemperature;
