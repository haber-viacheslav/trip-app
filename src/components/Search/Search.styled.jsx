import styled from 'styled-components';

export const SearchWrp = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  display: inline-block;
  background-color: ${props => props.theme.colors.transparent};
  width: 100%;
  font-family: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  color: ${props => props.theme.colors.black};
  &::placeholder {
    font-family: inherit;
    font-size: 20px;
    font-weight: ${props => props.theme.fontWeights.medium};
    color: ${props => props.theme.colors.darkGrey};
  }
`;
