import { Container, Inner, Points, Ticket } from "./styles";

import { useSpringValue } from "../../../../hooks/spring-value";

const UserPoints = ({ points = 0 }) => {
  const [isAnimating, counterRef] = useSpringValue(points);

  return (
    <Container>
      <Inner isAnimating={isAnimating}>
        <Points>
          Pontos: <span ref={counterRef} />
        </Points>
        <Ticket ml="8px" />
      </Inner>
    </Container>
  );
};

export default UserPoints;
