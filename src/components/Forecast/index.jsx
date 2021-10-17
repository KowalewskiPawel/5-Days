import PropTypes from "prop-types";

import displayTemperature from "../../utils/displayTemperature";

import OutterContainer from "./OutterCointainer";
import InnerContainer from "./InnerContainer";
import StyledImage from "./StyledImage";

import Cloud from "../../assets/cloud.svg";
import Crescent from "../../assets/crescent.svg";
import Humidity from "../../assets/humidity.svg";
import Sun from "../../assets/sun.svg";

const Forecast = ({ day, units }) => {
  if (!day) return <></>;

  const morningTemp = day.find(
    (item) =>
      item.dt_txt.split(" ")[1] === "06:00:00" ||
      item.dt_txt.split(" ")[1] === "09:00:00"
  );

  const dayTemp = day.find(
    (item) =>
      item.dt_txt.split(" ")[1] === "12:00:00" ||
      item.dt_txt.split(" ")[1] === "15:00:00"
  );

  const nightTemp = day.find(
    (item) => item.dt_txt.split(" ")[1] === "21:00:00"
  );

  const humidity =
    day.map((item) => item.main.humidity).reduce((prev, curr) => prev + curr) /
    day.length;

  return (
    <OutterContainer>
      <InnerContainer>
        <span>
          <StyledImage src={Cloud} /> Morning Temperature:{" "}
          <span>{displayTemperature(morningTemp, units)}</span>{" "}
        </span>
        <span>
          <StyledImage src={Sun} /> Day Temperature:{" "}
          <span>{displayTemperature(dayTemp, units)}</span>{" "}
        </span>
      </InnerContainer>
      <InnerContainer>
        <span>
          <StyledImage src={Crescent} /> Night Temperature:{" "}
          <span> {displayTemperature(nightTemp, units)}</span>{" "}
        </span>
        <span>
          <StyledImage src={Humidity} /> Humidity:{" "}
          <span>{Math.trunc(humidity)}%</span>
        </span>
      </InnerContainer>
    </OutterContainer>
  );
};

Forecast.defaultProps = {
  day: null,
  units: null,
};

Forecast.propTypes = {
  day: PropTypes.array,
  units: PropTypes.string,
};

export default Forecast;
