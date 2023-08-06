import styled from 'styled-components';

export const UserStyledButton = styled.button`
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: 250ms box-shadow ease-in-out;

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.thirdShadow};
  }
`;
