import styled from 'styled-components';

export const StyledAddButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: ${props => props.theme.fontWeights.medium};
  width: 200px;
  height: 160px;
  background-color: ${props => props.theme.colors.light};
  border: none;
  color: ${props => props.theme.colors.black};
`;
