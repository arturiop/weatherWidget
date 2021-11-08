/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { addCityToLocalStorage } from '../../utils/functions';
import {
  CurrentDataCityWeatherType, ForecastCityType,
} from './types';

export interface CitiesWeatherState {
  citiesWeather:CurrentDataCityWeatherType[],
  forecast: ForecastCityType,
  isLoading: boolean,
  error: string
}

const initialState: CitiesWeatherState = {
  citiesWeather: [],
  forecast: {} as ForecastCityType,
  isLoading: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {

    deleteCity: (state, { payload }: PayloadAction<string>) => {
      const filteredCities = state.citiesWeather.filter((city) => city.name !== payload);
      state.citiesWeather = filteredCities;
    },

    setCity: (state, { payload }: PayloadAction<CurrentDataCityWeatherType>) => {
      state.isLoading = false;
      state.error = '';
      addCityToLocalStorage(payload.name);
      state.citiesWeather = [payload].concat(state.citiesWeather);
    },

    setCityFromLS: (state, { payload }: PayloadAction<CurrentDataCityWeatherType>) => {
      state.isLoading = false;
      state.error = '';
      state.citiesWeather = [payload].concat(state.citiesWeather);
    },

    setErrorAxiosError: (state, { payload }: PayloadAction<AxiosError>) => {
      state.isLoading = false;
      state.error = payload.response ? payload.response.data.message : 'Unknown error';
    },

    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },

    toggleLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },

    updateCityData: (state, { payload }: PayloadAction<CurrentDataCityWeatherType>) => {
      state.isLoading = false;
      state.error = '';
      state.citiesWeather = state.citiesWeather
        .map((city) => ((city.id === payload.id) ? payload : city));
    },

    setForecastCity: (state, { payload }: PayloadAction<ForecastCityType>) => {
      state.isLoading = false;
      state.error = '';
      const getForecastDayTime = payload.list.filter((item) => item.dt_txt[12] === '5');

      state.forecast = { ...payload, list: getForecastDayTime };
    },
  },
});

export const {
  deleteCity,
  setCity,
  toggleLoading,
  setError,
  updateCityData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
