import { StyledFormButton } from 'components/buttons/FormButton.styled';
export const FormButton = ({ children, onClick }) => {
  return (
    <StyledFormButton type="button" onClick={onClick}>
      {children}
    </StyledFormButton>
  );
};
