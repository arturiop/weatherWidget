import {
  FC,
  useMemo,
} from 'react';
import { Box, ScaleFade } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getForecastCity, updateCityWeather } from '../features/citiesWeather/actions';
import { deleteCity } from '../features/citiesWeather/weatherSlice';
import { deleteFromLocalStorage } from '../utils/functions';
import { keyLS } from '../utils/variables';
import { MemoizedCard } from './WeatherCard';
import { useAppSelector } from '../hooks/redux';

export const Cards: FC = () => {
  const citiesWeather = useAppSelector((state) => state.weather.citiesWeather);

  const dispatch = useDispatch();

  const updateData = (cityName: string) => {
    dispatch(updateCityWeather(cityName));
  };

  const deleteCityCard = (cityName: string) => {
    dispatch(deleteCity(cityName));
    deleteFromLocalStorage(keyLS, cityName);
  };

  const forecastCity = (city: string) => {
    dispatch(getForecastCity(city));
  };

  const mappedCards = citiesWeather.map((city) => (
    <ScaleFade
      key={`scale_${city.id}`}
      initialScale={0.8}
      in
    >
      <MemoizedCard
        deleteCity={deleteCityCard}
        key={city.id}
        update={updateData}
        city={city}
        forecastCity={forecastCity}
      />
    </ScaleFade>
  ));

  const cards = useMemo(() => mappedCards, [citiesWeather]);
  return (
    <Box maxW={['100%', '100%', '500px']}>
      {cards}
    </Box>
  );
};
