import { FC, useEffect, useMemo } from 'react';
import { Box, Heading, ScaleFade } from '@chakra-ui/react';
import { ForecastCityType } from '../features/citiesWeather/types';
import { ForecastRow } from './ForecastRow';

type PropsType = {
  data: ForecastCityType
};

export const Forecast: FC<PropsType> = ({ data }: PropsType) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [data]);

  const mappedDaysForecast = data.list.map((dayForecast, index) => (
    <ForecastRow
      index={index}
      key={dayForecast.dt_txt}
      dayWeather={dayForecast}
    />
  ));

  const daysForecast = useMemo(() => mappedDaysForecast, [data.list]);
  return (
    <ScaleFade
      initialScale={0.8}
      in
    >
      <Box minW={['none', null, '400px']}>
        <Box
          borderRadius="md"
          borderColor="gray.700"
          border="1px"
          bgColor="white"
          margin="2"
          padding="2"
        >
          <Heading textAlign="center" size="md">
            Forecast
            {' '}
            {data.city.name}
          </Heading>
          {daysForecast}
        </Box>
      </Box>
    </ScaleFade>
  );
};
