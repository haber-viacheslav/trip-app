import { UserStyledButton } from './UserButton.styled';
export const UserButton = ({ onClick, children, bg }) => {
  return (
    <UserStyledButton bg={bg} type="button" onClick={onClick}>
      {children}
    </UserStyledButton>
  );
};
