import styled, { css } from "styled-components";

export const GridCell = styled.div`
  background: "#ccc";

  ${({ lg }) =>
    lg &&
    css`
      @media screen and (max-width: 765px) {
        display: none;
      }
    `}
`;
