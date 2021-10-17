import StyledSwitch from "./StyledSwitch";
import StyledSpan from "./StyledSpan";
import { useState } from "react";

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

export default DegreeSwitch;
