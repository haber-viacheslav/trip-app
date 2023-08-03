import axios from 'axios';

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cherkasy/2023-08-03/2023-08-10?unitGroup=metric&include=days&key=ME7S843NF7P43LGDA959W8PLB&contentType=json
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kyiv/today?unitGroup=metric&include=days&key=ME7S843NF7P43LGDA959W8PLB&contentType=json
export const API_KEY = 'ME7S843NF7P43LGDA959W8PLB';

axios.defaults.baseURL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export const fetchWeatherByDates = async trip => {
  const { name, startTime, endTime } = trip;
  try {
    const response = await axios.get(
      `${name}/${startTime}/${endTime}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchWeatherByDay = async trip => {
  try {
    const response = await axios.get(
      `${trip.name}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};
