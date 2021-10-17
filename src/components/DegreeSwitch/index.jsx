import { useState } from "react";
import PropTypes from "prop-types";

import StyledSwitch from "./StyledSwitch";
import StyledSpan from "./StyledSpan";

const DegreeSwitch = ({ setOutterUnits }) => {
  const [units, setUnits] = useState("metric");

  const handleClick = () => {
    if (units === "metric") {
      setUnits("imperial");
      setOutterUnits("imperial");
      return;
    }

    setUnits("metric");
    setOutterUnits("metric");
  };

  return (
    <StyledSwitch onClick={() => handleClick()}>
      <label>
        <StyledSpan isActive={units === "metric"}>C°</StyledSpan> /{" "}
        <StyledSpan isActive={units === "imperial"}>F°</StyledSpan>
      </label>
    </StyledSwitch>
  );
};

DegreeSwitch.propTypes = {
  setOutterUnits: PropTypes.func.isRequired,
};

export default DegreeSwitch;
