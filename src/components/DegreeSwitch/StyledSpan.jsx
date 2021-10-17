import styled, { css } from "styled-components";

const StyledSpan = styled.span`
  ${(props) =>
    props.isActive &&
    css`
      color: white;
    `}
`;

export default StyledSpan;
