import { StyledCloseButton } from './CloseButton.styled';
export const CloseButton = ({ children, onClick }) => {
  return (
    <StyledCloseButton type="button" onClick={onClick}>
      {children}
    </StyledCloseButton>
  );
};
