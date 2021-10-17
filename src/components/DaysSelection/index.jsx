import { useState } from "react";
import PropTypes from "prop-types";

import calculateAvgTempAndClouds from "../../utils/calculateAvgTempAndClouds";
import displayAvgTemperature from "../../utils/displayAvgTemperature";

import StyledSection from "./StyledSection";
import StyledDay from "./StyledDay";
import StyledImage from "./StyledImage";

import Cloud from "../../assets/cloud.svg";
import Humidity from "../../assets/humidity.svg";
import Sun from "../../assets/sun.svg";

const DaysSelection = ({ dates, days, setDay, units }) => {
  const [selectedDay, setSelectedDay] = useState(0);

  if (!dates) return <></>;

  let averageTempAndClouds;

  if (days) {
    averageTempAndClouds = calculateAvgTempAndClouds(days);
  }

  const weatherIcon = (averageClouds) => {
    if (averageClouds < 50) {
      return Sun;
    }

    if (averageClouds > 80) {
      return Humidity;
    }

    return Cloud;
  };

  const handleSelect = (day) => {
    setSelectedDay(day);
    setDay(day);
  };

  return (
    <StyledSection>
      {dates.slice(0, 5).map((item, index) => {
        return (
          <StyledDay
            key={item}
            onClick={() => handleSelect(index)}
            isActive={selectedDay === index}>
            <p>{item}</p>
            <StyledImage
              src={weatherIcon(averageTempAndClouds[index].averageClouds)}
            />
            <h4>
              {displayAvgTemperature(
                averageTempAndClouds[index].averageTemp,
                units
              )}
            </h4>
          </StyledDay>
        );
      })}
    </StyledSection>
  );
};

DaysSelection.defaultProps = {
  dates: null,
  days: null,
  setDay: null,
  units: null,
};

DaysSelection.propTypes = {
  dates: PropTypes.array,
  days: PropTypes.array,
  setDay: PropTypes.func,
  units: PropTypes.string,
};

export default DaysSelection;
