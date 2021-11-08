import {
  FC,
  useEffect,
  useState,
} from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/redux';
import { keyLS } from '../../utils/variables';
import {
  loadLocalStorageCity,
} from '../../features/citiesWeather/actions';
import { Forecast } from '../Forecast';
import { WeatherError } from '../ui/WeatherError';
import { Cards } from '../WeatherCards';
import { Preloader } from '../ui/preloader/preloader';

export const WeatherWidgets: FC = () => {
  const { forecast, isLoading } = useAppSelector((state) => state.weather);
  const [preload, setPreload] = useState(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    const citiesLS: string[] = JSON.parse(localStorage.getItem(keyLS) || '[]');

    if (citiesLS.length) {
      citiesLS.map((city) => dispatch(loadLocalStorageCity(city)));
    }
  }, []);

  useEffect(() => {
    if (isLoading) {
      setPreload(true);
      setTimeout(() => setPreload(false),
        500);
    }
  }, [isLoading]);

  return (
    <Box>
      <Flex
        position="fixed"
        top={['12', '20']}
        right="2"
        zIndex="999"
      >
        <WeatherError />
      </Flex>
      <Box
        w="100%"
        position="fixed"
        top="20"
        left="40%"
        zIndex="999"
      >
        {preload ? <Preloader /> : null}
      </Box>
      <Flex
        direction={['column', null, 'row']}
        justify="space-around"
      >
        <Box maxW={['100%', null, '550px']}>
          {(JSON.stringify(forecast) !== '{}')
            ? <Forecast data={forecast} />
            : null}
        </Box>
        <Cards />
      </Flex>
    </Box>
  );
};
