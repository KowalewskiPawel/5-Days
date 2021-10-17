import styled from "styled-components";

const StyledImage = styled.img`
  width: 60px;
  height: 60px;
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

export default StyledImage;
