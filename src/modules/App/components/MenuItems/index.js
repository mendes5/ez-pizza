import {
  Container,
  MenuItem,
  MenuItemDescription,
  MenuItemImage,
  MenuItemLabel,
  MoreItems,
  Title,
} from "./styles";

const MenuItems = ({ onOpenPizzaModalClick }) => (
  <Container>
    <Title>Menu:</Title>
    <MenuItem onClick={onOpenPizzaModalClick}>
      <MenuItemImage />
      <div>
        <MenuItemLabel>Pizzas</MenuItemLabel>
        <MenuItemDescription>
          Literalmente a melhor pizza de é possivel de se fazer... Top 10
          cientistas ainda não conseguem entender como é possivel, cozinheiros
          do mundo inteiro estão tentando decifar a receita.
        </MenuItemDescription>
      </div>
    </MenuItem>
    <MoreItems>
      Mais Items em Breve... <i>(We will let you know)</i>
    </MoreItems>
  </Container>
);

export default MenuItems;
