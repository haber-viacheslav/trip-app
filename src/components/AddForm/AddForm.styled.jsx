import styled from 'styled-components';

export const StyledForm = styled.form`
  border-top: 2px solid ${props => props.theme.colors.white};
  border-bottom: 2px solid ${props => props.theme.colors.white};
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInputsContainer = styled.div`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledLabelValidation = styled.span`
  display: inline-block;
  color: red;
`;

export const StyledSelect = styled.select`
  padding: 8px;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  &:active,
  &:focus {
    border-color: ${props => props.theme.colors.blue};
  }
  &:hover {
    outline: 1px solid ${props => props.theme.colors.lightGrey};
  }
`;
export const StyledInput = styled.input`
  outline: none;
  border-width: 2px solid ${props => props.theme.colors.white};
  padding: 8px;
  width: 100%;
  &:active,
  &:focus {
    border-color: ${props => props.theme.colors.blue};
  }
  &:hover {
    outline: 1px solid ${props => props.theme.colors.lightGrey};
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 18px;
`;

export const StyledButtonsContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
