import {
  ForecastStyledListWrp,
  ForecastStyledList,
} from './ForecastList.styled';
import { ForecastItem } from 'components/ForecastItem/ForecastItem';
export const ForecastList = ({ forecastData }) => {
  return (
    <>
      {forecastData.length > 0 && (
        <>
          <h2>Days</h2>
          <ForecastStyledListWrp>
            <ForecastStyledList>
              {forecastData.days.map(forecast => (
                <ForecastItem key={forecast.id} tripData={forecast} />
              ))}
            </ForecastStyledList>
          </ForecastStyledListWrp>
        </>
      )}
    </>
  );
};
