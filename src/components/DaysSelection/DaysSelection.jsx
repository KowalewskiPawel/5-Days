import { useState } from "react";
import styled, { css } from "styled-components";

import Cloud from "../../assets/cloud.svg";
import Humidity from "../../assets/humidity.svg";
import Sun from "../../assets/sun.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin: 4rem 0;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;

const StyledDay = styled.div`
  width: 100px;
  height: 200px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  ${(props) =>
    props.isActive &&
    css`
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid #ffffff;
      box-sizing: border-box;
      border-radius: 30px;
    `}

  & p {
    font-family: "Palanquin";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    text-align: center;

    color: #ffffff;
    opacity: 0.5;

    margin-top: 1rem;
  }

  & h4 {
    font-family: "Palanquin";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 0;
    text-align: center;

    color: #ffffff;
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 140px;

    & p {
      font-size: 12px;
    }

    & h4 {
      font-size: 16px;
    }
  }

  @media (max-width: 360px) {
    width: 50px;
    height: 140px;

    & p {
      font-size: 10px;
    }

    & h4 {
      font-size: 14px;
    }
  }
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  margin: 1rem 0.8rem;

  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 360px) {
    width: 30px;
    height: 30px;
  }
`;

const DaysSelection = ({ dates, days, setDay }) => {
  const [selectedDay, setSelectedDay] = useState(0);

  if (!dates) return <></>;

  let averageTempAndClouds;

  if (days) {
    averageTempAndClouds = days.map((item) => {
      const tempAvg = item
        .map((array) => array.main.temp)
        .reduce((prev, curr) => prev + curr);
      const cloudsAvg = item
        .map((array) => array.clouds.all)
        .reduce((prev, curr) => prev + curr);
      const tempObject = {
        averageTemp: Math.trunc(tempAvg / item.length),
        averageClouds: Math.trunc(cloudsAvg / item.length),
      };
      return tempObject;
    });
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
            <h4>{averageTempAndClouds[index].averageTemp} °</h4>
          </StyledDay>
        );
      })}
    </StyledSection>
  );
};

export default DaysSelection;
