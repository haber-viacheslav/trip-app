import styled from 'styled-components';

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.theme.colors.transparent};
  cursor: pointer;
  transition: 250ms background-color ease-in-out, 250ms box-shadow ease-in-out;
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.white};
    box-shadow: ${props => props.theme.shadows.thirdShadow};
  }
`;
