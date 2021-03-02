import styled from "styled-components";

export const ModalContainer = styled.div`
  padding: 0 16px;
  max-width: 800px;
  max-height: 80%;
  height: 100%;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  font-size: 25px;
`;

export const ModalFooter = styled.div`
  height: 50px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  height: 100%;
`;
