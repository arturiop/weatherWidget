import {
  FC, memo, MouseEvent, useState,
} from 'react';
import {
  Box, Button, Flex, Text, Heading, Image,
} from '@chakra-ui/react';
import moment from 'moment';
import { CurrentDataCityWeatherType } from '../features/citiesWeather/types';
import { capitalize, getIconURL, toCelsius } from '../utils/functions';
import { WeatherAdditionalInfo } from './ui/WeatherAdditionalInfo';

type PropsType = {
  city: CurrentDataCityWeatherType,
  update: (cityName: string) => void;
  deleteCity: (cityName: string) => void;
  forecastCity: (cityName: string) => void;
};

const Card: FC<PropsType> = ({
  city, update, deleteCity, forecastCity,
}: PropsType) => {
  const [toggle, setToggle] = useState(false);
  const { temp, humidity, feels_like: feelsLike } = city.main;
  const {
    weather,
    name: cityName,
    sys,
    wind,
  } = city;

  const currentDate = moment().utcOffset(city.timezone / 60);
  const dayOfWeek = currentDate.format('dddd');
  const date = currentDate.format('DD MMM YYYY');

  const temperature = toCelsius(temp);

  const weatherDescription = capitalize(weather.map((item) => item.description).join(', '));

  const iconURL = getIconURL(weather[0].icon);
  const switcher = () => setToggle(!toggle);

  const updateData = (e: MouseEvent) => {
    e.stopPropagation();
    update(cityName);
  };
  const deleteCityCard = (e: MouseEvent) => {
    e.stopPropagation();
    deleteCity(city.name);
  };

  const getForecast = async (e: MouseEvent) => {
    e.stopPropagation();
    forecastCity(city.name);
  };

  return (
    <Box minW={['280px', 'none', '400px', '550px']}>
      <Flex
        color="#e8e3e3"
        borderRadius="2xl"
        onClick={switcher}
        margin="2"
        padding="4"
        flexDirection="column"
        bgColor="#242323"
      >
        <Box
          padding="4"
          borderRadius="xl"
          bgColor="#404040"
        >
          <Flex direction={['column', 'row']} justify="space-between">
            <Box align="center">
              <Heading isTruncated>
                {cityName}
              </Heading>
              <Text>
                {sys.country}
              </Text>
            </Box>
            <Box display={['none', 'block']}>
              <Image h="100%" src={iconURL} alt={weatherDescription} />
            </Box>
            <Box align="center">
              <Heading size="lg">
                {dayOfWeek}
              </Heading>
              <Text>
                {date}
              </Text>
            </Box>
          </Flex>

          <Flex justify="space-around" alignItems="center">
            <Heading size="2xl">
              {temperature}
            </Heading>
          </Flex>
          <Heading isTruncated size="md" textAlign="center">
            {weatherDescription}
          </Heading>
        </Box>
        {toggle
          ? (
            <WeatherAdditionalInfo
              speed={wind.speed}
              feelsLike={feelsLike}
              humidity={humidity}
            />
          )
          : null}

        <Flex color="#242323" marginTop="2" justify="space-around" align="center">
          <Button onClick={getForecast}>
            forecast
          </Button>
          <Button marginX="2" onClick={updateData}>
            update
          </Button>
          <Button
            onClick={deleteCityCard}
            colorScheme="red"
          >
            delete
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export const MemoizedCard = memo(Card);
