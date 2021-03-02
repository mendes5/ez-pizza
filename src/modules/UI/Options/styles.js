import { Checkbox, Radio } from "modules/Form";

import CheckboxCheck from "images/checkbox.svg";
import CheckboxUncheck from "images/checkbox-uncheck.svg";
import RadioCheck from "images/radio.svg";
import RadioUncheck from "images/radio-uncheck.svg";
import styled from "styled-components";

export const OptionCard = styled.label`
  border-radius: 6px;
  border: 1px solid #b2b2b2;
  cursor: pointer;
  min-width: 500px;
  min-height: 40px;
  padding: 8px;
  display: grid;
  grid-template-columns: 14px 1fr;
  justify-content: start;
  gap: 16px;
  align-items: center;
  color: #525252;
  font-weight: 500;

  transition: background-color 200ms;

  :hover {
    background-color: #f2f2f2;
  }
`;

export const RadioIcon = styled.div`
  background-image: url("${RadioUncheck}");
  filter: saturate(0) brightness(2);
  width: 14px;
  height: 14px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledRadio = styled(Radio)`
  display: none;

  &:checked + ${OptionCard} {
    border: 1px solid red;
    background-color: #fff3e9;
  }

  &:checked + ${OptionCard} ${RadioIcon} {
    background-image: url("${RadioCheck}");
    filter: none;
  }
`;

export const CheckboxIcon = styled.div`
  background-image: url("${CheckboxUncheck}");
  filter: saturate(0) brightness(2);
  width: 14px;
  height: 14px;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledCheckbox = styled(Checkbox)`
  display: none;

  &:checked + ${OptionCard} {
    border: 1px solid red;
    background-color: #fff3e9;
  }

  &:checked + ${OptionCard} ${CheckboxIcon} {
    background-image: url("${CheckboxCheck}");
    filter: none;
  }
`;
