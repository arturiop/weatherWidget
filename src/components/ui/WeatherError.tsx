import { FC } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/redux';

export const WeatherError: FC = () => {
  const error = useAppSelector((state) => state.weather.error);

  return (
    <Box
      display={error ? 'block' : 'none'}
    >
      <Heading textDecoration="underline" textAlign="center" size="sm" color="red.500">
        {error}
      </Heading>
    </Box>
  );
};
