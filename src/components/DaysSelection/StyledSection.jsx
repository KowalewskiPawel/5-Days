import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  width: fit-content;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin: 4rem auto;
  padding: 1rem;

  background: #32333e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media (max-width: 600px) {
    gap: 1rem;
    margin: 4rem 0.5rem;
  }

  @media (max-width: 380px) {
    gap: 0.5rem;
    margin: 4rem 0.5rem;
  }
`;

export default StyledSection;
