import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: 39px;

  margin: 2rem 0;

  background: #464858;
`;

const StyledDate = styled.p`
  font-family: "Palanquin";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.07px;

  color: #b1b3c5;
`;

const showDate = () => {
  const date = new Date();
  return new Intl.DateTimeFormat("en-GB").format(date).split("/").join(".");
};

const DateDisplay = () => (
  <StyledSection>
    <StyledDate>Today is: {showDate()}</StyledDate>
  </StyledSection>
);

export default DateDisplay;
