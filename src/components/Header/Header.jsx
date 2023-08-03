import { Container } from 'components/Container/Container';
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderLogoThin,
} from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderLogo href="/">
          <StyledHeaderLogoThin>Weather</StyledHeaderLogoThin> Forecast
        </StyledHeaderLogo>
      </Container>
    </StyledHeader>
  );
};
