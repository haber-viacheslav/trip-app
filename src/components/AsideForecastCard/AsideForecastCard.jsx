import { weatherIcon } from 'images/images';
import { getDayOfWeek } from 'helpers/getDayOfWeek';
import {
  ForecastStyledWrp,
  ForecastStyledTitle,
  ForecastStyledContentWrp,
  ForecastStyledImage,
  ForecastStyledTemp,
  ForecastStyledLocation,
  ForecastStyledSup,
} from './AsideForecastCard.styled';
import { trimStringForCards } from 'helpers/trimStringForCards';
export const AsideForecastCard = ({ forecast }) => {
  const { days, address } = forecast;
  const dayForecastData = days[0];
  const { temp, icon, datetime, description } = dayForecastData;

  return (
    <ForecastStyledWrp>
      <ForecastStyledTitle>{getDayOfWeek(datetime)}</ForecastStyledTitle>
      <ForecastStyledContentWrp>
        <ForecastStyledImage
          src={weatherIcon[icon]}
          alt={description}
          loading="lazy"
          width="120"
        />
        <ForecastStyledTemp>{Math.round(temp)}</ForecastStyledTemp>
        <ForecastStyledSup>&deg;C</ForecastStyledSup>
      </ForecastStyledContentWrp>
      <ForecastStyledLocation>
        {trimStringForCards(address, ', Ukraine')}
      </ForecastStyledLocation>
    </ForecastStyledWrp>
  );
};
