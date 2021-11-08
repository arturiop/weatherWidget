import { instance } from '../../config/api';
import { CurrentWeatherResponseType, ForecastCityResponseType } from './types';

export const cityWeatherAPI = {

  currentWeather(cityName: string):CurrentWeatherResponseType {
    return (
      instance.get('weather', {
        params: {
          city: cityName,
        },
      })
    );
  },

  forecast(cityName: string): ForecastCityResponseType {
    return (
      instance.get('forecast', {
        params: {
          city: cityName,
        },
      })
    );
  },
};
