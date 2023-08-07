import {
  ForecastStyledItem,
  ForecastDay,
  ForecastWrapImg,
  ForecastImg,
  ForecastTemperature,
} from './ForecastItem.styled';
import { weatherIcon } from 'images/images';
import { getDayOfWeek } from 'helpers/getDayOfWeek';
export const ForecastItem = ({
  forecast: { datetime, icon, description, tempmax, tempmin },
}) => {
  return (
    <ForecastStyledItem>
      <ForecastDay>{getDayOfWeek(datetime)}</ForecastDay>
      <ForecastWrapImg>
        <ForecastImg
          src={weatherIcon[icon]}
          alt={description}
          loading="lazy"
          width="80"
        />
      </ForecastWrapImg>
      <ForecastTemperature>
        {Math.round(tempmax)}&deg;/{Math.round(tempmin)}&deg;
      </ForecastTemperature>
    </ForecastStyledItem>
  );
};
