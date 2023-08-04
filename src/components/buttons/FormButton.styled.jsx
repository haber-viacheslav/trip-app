import styled from 'styled-components';
export const StyledFormButton = styled.button`
  display: inline-block;
  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 16px;
  border: 2px solid ${props => props.theme.colors.light};
  border-radius: 2px;
  background-color: ${props => props.theme.colors.clearWhite};
  color: ${props => props.theme.colors.darkGrey};
  padding: 4px 8px;
  transition: 250ms background-color ease-in-out, 250ms box-shadow ease-in-out,
    250ms color ease-in-out, 250ms border-color ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.clearWhite};
    background-color: ${props => props.theme.colors.blue};
    box-shadow: ${props => props.theme.shadows.thirdShadow};
    border-color: ${props => props.theme.colors.blue};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.darkGrey};
    border-color: ${props => props.theme.colors.light};
    box-shadow: none;
    cursor: not-allowed;
  }
`;
