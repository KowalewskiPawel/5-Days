import styled from "styled-components";

const OutterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: fit-content;
  padding: 0.4rem;
  gap: 8rem;
  margin: 4rem auto;

  background: #32333e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media (max-width: 600px) {
    gap: 1rem;
    margin: 4rem 1rem;
  }
`;

export default OutterContainer;
