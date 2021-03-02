import {
  CheckboxIcon,
  OptionCard,
  RadioIcon,
  StyledCheckbox,
  StyledRadio,
} from "./styles";

export const RadioOption = ({ id, value, name, children }) => (
  <>
    <StyledRadio id={id} name={name} value={value} />
    <OptionCard htmlFor={id}>
      <RadioIcon />
      {children}
    </OptionCard>
  </>
);

export const CheckboxOption = ({ id, name, value, children }) => (
  <>
    <StyledCheckbox id={id} name={name} value={value} />
    <OptionCard htmlFor={id}>
      <CheckboxIcon />
      {children}
    </OptionCard>
  </>
);
