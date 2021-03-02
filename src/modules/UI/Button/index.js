import styled from "styled-components";

export const Button = styled.button`
  appearance: none;
  border: none;
  background-color: #fff;
  border: 2px solid #cdcdcd;
  border-radius: 4px;
  padding: 8px 15px;
  margin: 0 4px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  font-size: 14px;
  color: #383838;

  :disabled {
    opacity: 0.5;
  }
`;