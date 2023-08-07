import { UserStyledButton } from './UserButton.styled';
export const UserButton = ({ onClick, children }) => {
  return (
    <UserStyledButton type="button" onClick={onClick}>
      {children}
    </UserStyledButton>
  );
};
