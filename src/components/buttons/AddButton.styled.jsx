import styled from 'styled-components';

export const StyledAddButton = styled.button`
  display: flex;
  cursor: pointer;
  font-family: inherit;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 0;
  font-weight: ${props => props.theme.fontWeights.medium};
  width: 200px;
  height: 160px;
  background-color: ${props => props.theme.colors.white};
  border: none;
  color: ${props => props.theme.colors.black};
`;
