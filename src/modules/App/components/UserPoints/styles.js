import TicketImage from "images/ticket.svg";
import { space } from "styled-system";
import styled from "styled-components";

export const Ticket = styled.img.attrs({ src: TicketImage })`
  width: 23px;
  height: 23px;
  ${space}
`;

export const Container = styled.div`
  border-radius: 20px;
  height: 40px;
  background-color: red;
  height: fit-content;
  box-shadow: #4242423d 0px 1px 1px 1px;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 30px;
  transition: transform 200ms, color 200ms;

  ${({ isAnimating }) =>
    isAnimating
      ? `
  transform: scale(1.1);
  color: lime;
  `
      : `
  transform: scale(1);
  color: #fff;
  `};
`;

export const Points = styled.span`
  font-weight: bold;
  font-size: 20px;
`;
