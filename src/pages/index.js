import { Body, Header, MenuItems } from "modules/App";
import { useCallback, useState } from "react";

import { AppContainer } from "./styles";
import { PizzaModal } from "modules/Pizza";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseClick = useCallback(() => setIsModalOpen(false), []);
  const handleOpenClick = useCallback(() => setIsModalOpen(true), []);

  return (
    <AppContainer>
      <Header></Header>
      <Body>
        <MenuItems onOpenPizzaModalClick={handleOpenClick} />
      </Body>
      <PizzaModal isOpen={isModalOpen} onCloseClick={handleCloseClick} />
    </AppContainer>
  );
};

export default App;
