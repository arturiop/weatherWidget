/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../../config/store';
import { keyLS } from '../../utils/variables';
import { cityWeatherAPI } from './weatherAPI';
import { weatherSlice } from './weatherSlice';

export const getCityWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherSlice.actions.toggleLoading(true));
    const response = await cityWeatherAPI.currentWeather(city);
    const cities: string[] = JSON.parse(localStorage.getItem(keyLS) || '[]');
    if (cities.includes(response.data.name)) {
      dispatch(weatherSlice.actions.updateCityData(response.data));
    } else {
      dispatch(weatherSlice.actions.setCity(response.data));
    }
  } catch (e: any) {
    dispatch(weatherSlice.actions.setErrorAxiosError(e));
  }
};

export const loadLocalStorageCity = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherSlice.actions.toggleLoading(true));

    const response = await cityWeatherAPI.currentWeather(city);
    dispatch(weatherSlice.actions.setCityFromLS(response.data));
  } catch (e: any) {
    dispatch(weatherSlice.actions.setErrorAxiosError(e));
  }
};

export const updateCityWeather = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherSlice.actions.toggleLoading(true));

    const response = await cityWeatherAPI.currentWeather(city);
    dispatch(weatherSlice.actions.toggleLoading(true));

    dispatch(weatherSlice.actions.updateCityData(response.data));
  } catch (e: any) {
    dispatch(weatherSlice.actions.setError(e));
  }
};

export const getForecastCity = (city: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(weatherSlice.actions.toggleLoading(true));

    const response = await cityWeatherAPI.forecast(city);
    dispatch(weatherSlice.actions.setForecastCity(response.data));
  } catch (e: any) {
    dispatch(weatherSlice.actions.setErrorAxiosError(e));
  }
};
