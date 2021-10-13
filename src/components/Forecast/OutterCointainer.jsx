import styled from "styled-components";

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

export default OutterContainer;
