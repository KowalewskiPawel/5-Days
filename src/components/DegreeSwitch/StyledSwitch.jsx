import styled from "styled-components";

const StyledSwitch = styled.div`
  width: 67px;
  height: 33px;
  margin: 0 auto 0 auto;
  transform: translate(7rem, 4.44rem);

  background: #32333e;
  border-radius: 16px;

  & * {
    cursor: pointer;
  }

  & label {
    font-family: "Palanquin";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    padding-left: 0.5rem;
    color: #9b9ead;
    text-align: center;
    letter-spacing: 0.0583333px;
  }
`;

export default StyledSwitch;
