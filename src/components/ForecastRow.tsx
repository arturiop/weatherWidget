import { FC } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import moment from 'moment';
import { ForecastItemType } from '../features/citiesWeather/types';
import { capitalize, getIconURL, toCelsius } from '../utils/functions';

type PropsType = {
  dayWeather: ForecastItemType
  index: number
};

export const ForecastRow: FC<PropsType> = ({ dayWeather, index }:PropsType) => {
  const {
    temp_min: tempMin,
    temp_max: tempMax,
  } = dayWeather.main;
  const date = moment(dayWeather.dt_txt.substring(0, 10));
  const dayOfWeek = date.format('dddd');

  const temperatureMin = toCelsius(tempMin);
  const temperatureMax = toCelsius(tempMax);
  const weatherDescription = capitalize(dayWeather.weather[0].description);
  const weatherIcon = dayWeather.weather[0].icon;
  const iconURL = getIconURL(weatherIcon);

  return (
    <Flex
      paddingX="2"
      bgColor={(index % 2 === 0) ? '#d9d6d0' : ''}
      justify="space-between"
      align="center"
    >
      <Box>
        <Heading size="sm">
          {dayOfWeek}
        </Heading>
        <Text fontSize="0.75rem" color="gray.700">
          {weatherDescription}
        </Text>
      </Box>
      <Box>
        <Image h="100%" src={iconURL} alt={weatherDescription} />
      </Box>
      <Box>
        <Text>
          {temperatureMax}
        </Text>
        <Text>
          {temperatureMin}
        </Text>
      </Box>
    </Flex>
  );
};
