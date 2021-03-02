import {
  Container,
  LabelMain,
  LabelSlogan,
  LogoIcon,
  LogoText,
} from "./styles";

const Logo = () => (
  <Container>
    <LogoIcon />
    <LogoText>
      <LabelMain>EZ Pizza</LabelMain>
      <LabelSlogan>Just Let Em Know...</LabelSlogan>
    </LogoText>
  </Container>
);

export default Logo;
