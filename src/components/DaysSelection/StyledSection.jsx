import styled from "styled-components";

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

export default StyledSection;
