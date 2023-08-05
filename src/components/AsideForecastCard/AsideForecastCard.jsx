import { weatherIcon } from 'images/images';
import { getDayOfWeek } from 'helpers/getDayOfWeek';
import {
  ForecastStyledWrp,
  ForecastStyledTitle,
  ForecastStyledContentWrp,
  ForecastStyledImage,
  ForecastStyledTemp,
  ForecastStyledLocation,
} from './AsideForecastCard.styled';
export const AsideForecastCard = ({ forecast }) => {
  console.log('forecast', forecast);
  const { days, address } = forecast;
  const dayForecastData = days[0];
  const { temp, icon, datetime, description } = dayForecastData;
  console.log('icon', icon);

  return (
    <ForecastStyledWrp>
      <ForecastStyledTitle>{getDayOfWeek(datetime)}</ForecastStyledTitle>
      <ForecastStyledContentWrp>
        <ForecastStyledImage src={weatherIcon[icon]} alt={description} />
        <ForecastStyledTemp>{temp}&#8451;</ForecastStyledTemp>
      </ForecastStyledContentWrp>
      <ForecastStyledLocation>{address}</ForecastStyledLocation>
    </ForecastStyledWrp>
  );
};
