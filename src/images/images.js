import cloudy from './weather/cloudy.png';
import lightCloudyRainy from './weather/light-cloudy-rainy.png';
import fog from './weather/fog.png';
import partlyCloudy from './weather/partly-cloudy.png';
import rainfall from './weather/rainfall.png';
import snowfall from './weather/snowfall.png';
import sunny from './weather/sunny.png';
import thunderstorm from './weather/thunderstorm.png';
import wind from './weather/wind.png';

export const weatherIcon = {
  'partly-cloudy-day': partlyCloudy,
  'clear-day': sunny,
  rain: lightCloudyRainy,
  cloudy,
  snow: snowfall,
  fog,
  wind,
  'showers-day': rainfall,
  'thunder-rain': thunderstorm,
  'thunder-showers-day': thunderstorm,
};
