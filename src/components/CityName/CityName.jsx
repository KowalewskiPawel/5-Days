import styled from "styled-components";

const City = styled.h1`
  font-family: "Pacifico", cursive;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  text-align: center;
  letter-spacing: 0.07px;

  color: #dfdfe1;
`;

const CityName = ({ cityName }) => <City>{cityName}</City>;

export default CityName;
