import { UserStyledButton } from './UserButton.styled';
import { weatherIcon } from 'images/images';
export const UserButton = ({ variant, signOut, signIn, title }) => {
  if (title === 'Log in') {
    return (
      <UserStyledButton
        title={title}
        bg={weatherIcon.penguin}
        type="button"
        onClick={signIn}
      />
    );
  }
  return (
    <UserStyledButton
      title={title}
      bg={variant}
      type="button"
      onClick={signOut}
    />
  );
};
