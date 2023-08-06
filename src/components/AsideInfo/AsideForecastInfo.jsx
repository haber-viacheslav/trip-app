import {
  AsideStyledForecastInfo,
  AsideStyledForecastWrp,
} from './AsideForecastInfo.styled';
import { UserButton } from 'components/buttons/UserButton';

export const AsideForecastInfo = ({ children }) => {
  return (
    <AsideStyledForecastInfo>
      <UserButton>User</UserButton>
      <AsideStyledForecastWrp>{children}</AsideStyledForecastWrp>
    </AsideStyledForecastInfo>
  );
};
