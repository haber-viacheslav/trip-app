import {
  ForecastStyledItem,
  ForecastDay,
  ForecastWrapImg,
  ForecastImg,
  ForecastTemperature,
} from './ForecastItem.styled';

export const ForecastItem = ({ forecast }) => {
  return (
    <ForecastStyledItem>
      <ForecastDay></ForecastDay>
      <ForecastWrapImg>
        <ForecastImg src="" alt="" />
      </ForecastWrapImg>
      <ForecastTemperature>/</ForecastTemperature>
    </ForecastStyledItem>
  );
};
