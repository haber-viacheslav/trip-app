import styled from 'styled-components';

export const UserStyledButton = styled.button`
  background-image: linear-gradient(to right, #070e1110, #0f0f2b10, #06023d10),
    url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
