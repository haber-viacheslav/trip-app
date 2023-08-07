import {
  AsideStyledForecastInfo,
  AsideStyledForecastWrp,
} from './AsideForecastInfo.styled';

export const AsideForecastInfo = ({ children }) => {
  return (
    <AsideStyledForecastInfo>
      <AsideStyledForecastWrp>{children}</AsideStyledForecastWrp>
    </AsideStyledForecastInfo>
  );
};
