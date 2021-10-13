import styled from "styled-components";

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

export default InnerContainer;
