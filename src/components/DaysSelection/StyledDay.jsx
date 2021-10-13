import styled, { css } from "styled-components";

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

export default StyledDay;
