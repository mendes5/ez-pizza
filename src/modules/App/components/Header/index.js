import Logo from "../Logo";
import UserPoints from "../UserPoints";
import styled from "styled-components";
import { useUserPointCount } from "hooks/api";

const Container = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 50px;
  background-color: #ff7979;
  border-bottom: 2px solid #ffa6a6;
  align-items: center;
  padding: 0 16px;
`;

const Header = () => {
  const { data } = useUserPointCount();

  return (
    <Container>
      <Logo />
      <UserPoints points={data} />
    </Container>
  );
};

export default Header;
