import { SearchWrp, SearchInput } from './Search.styled';
import { BiSearch } from 'react-icons/bi';
export const Search = ({ value, onChange }) => (
  <SearchWrp>
    <BiSearch size="30" />
    <SearchInput
      name="search"
      id="search"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search your trip"
    />
  </SearchWrp>
);
