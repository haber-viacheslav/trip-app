import { StyledSection } from './Section.styled';
import { Main } from 'components/Main/Main';
export const Section = ({ children }) => {
  return (
    <Main>
      <StyledSection>{children}</StyledSection>
    </Main>
  );
};
