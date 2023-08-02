import { BiPlus } from 'react-icons/bi';
import { StyledAddButton } from './AddButton.styled';
export const AddButton = ({ onClick }) => {
  return (
    <StyledAddButton type="button" onClick={onClick}>
      <BiPlus />
      Add trip
    </StyledAddButton>
  );
};
