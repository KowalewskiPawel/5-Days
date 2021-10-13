import styled from "styled-components";

import Cloud from "../../assets/cloud.svg";
import Crescent from "../../assets/crescent.svg";
import Humidity from "../../assets/humidity.svg";
import Sun from "../../assets/sun.svg";

const OutterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8rem;
  margin: 4rem 2rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-family: "Palanquin";
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    margin: 0.5rem;

    color: #9b9ead;

    & img {
      padding-top: 1rem;
    }

    & span {
      color: #ffff;
    }
  }

  @media (max-width: 600px) {
    & span {
      font-size: 14px;
    }
  }
`;

const StyledImage = styled.img`
  width: 40px;
  height: 40px;
`;

const Forecast = ({ day }) => {
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
          <span>{Math.trunc(morningTemp.main.temp) || "Too late"}°</span>{" "}
        </span>
        <span>
          <StyledImage src={Sun} /> Day Temperature:{" "}
          <span>{Math.trunc(dayTemp.main.temp) || "Too late"}°</span>{" "}
        </span>
      </InnerContainer>
      <InnerContainer>
        <span>
          <StyledImage src={Crescent} /> Night Temperature:{" "}
          <span>{Math.trunc(nightTemp.main.temp) || "Too late"}°</span>{" "}
        </span>
        <span>
          <StyledImage src={Humidity} /> Humidity:{" "}
          <span>{Math.trunc(humidity)}%</span>
        </span>
      </InnerContainer>
    </OutterContainer>
  );
};

export default Forecast;
