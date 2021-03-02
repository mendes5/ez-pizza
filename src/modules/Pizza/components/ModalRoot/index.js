import styled from "styled-components";

const ModalRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.44);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ModalRoot;
