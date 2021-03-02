import styled from "styled-components";

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;

  &:first-child {
    justify-self: start;
  }

  &:last-child {
    justify-self: end;
  }
`;
