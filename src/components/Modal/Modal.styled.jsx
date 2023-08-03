import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden auto;
  z-index: 1000;
  background-color: ${props => props.theme.colors.backdrop};
`;

export const ModalBody = styled.div`
  background-color: ${props => props.theme.colors.clearWhite};
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 680px;
  height: 540px;
`;
