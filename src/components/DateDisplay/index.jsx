import StyledSection from "./StyledSection";
import StyledDate from "./StyledDate";

import showDate from "../../utils/showDate";

const DateDisplay = () => (
  <StyledSection>
    <StyledDate>Today is: {showDate()}</StyledDate>
  </StyledSection>
);

export default DateDisplay;
