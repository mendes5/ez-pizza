import PizzaIcon from "images/pizza.jpg";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: normal;
`;

export const MenuItem = styled.button`
  border-radius: 6px;
  text-align: left;
  box-shadow: #0000002b 0px 2px 4px 1px;
  padding: 20px;
  display: grid;
  grid-template-columns: 100px auto;
  gap: 16px;
  transition: transform 200ms;
  cursor: pointer;
  appearance: none;
  border: none;
  background-color: #fff;
  outline: none;

  :hover {
    transform: translateY(-2px);
  }
`;

export const MenuItemImage = styled.img.attrs({ src: PizzaIcon })`
  width: 100%;
  min-height: 100px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #d1d1d1;
`;

export const MenuItemLabel = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const MenuItemDescription = styled.p`
  color: #5d5d5d;
  margin-bottom: 0;
  font-size: 14px;
  font-style: italic;
`;

export const MoreItems = styled.span`
  text-decoration: underline;
  color: red;
  width: 100%;
  text-align: center;
  display: inline-block;
  margin-top: 32px;
  background-color: #ffeded;
  padding: 10px;
  border-radius: 7px;
`;
