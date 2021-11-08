import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { toCelsius } from '../../utils/functions';
import { DropIcon } from './icons/icons';

type PropsType = {
  feelsLike: number,
  speed: number,
  humidity: number
};

export const WeatherAdditionalInfo: FC<PropsType> = ({
  feelsLike,
  speed,
  humidity,
}:PropsType) => {
  const feels = `Feels like: ${toCelsius(feelsLike)}`;
  const windSpeed = `Wind: ${speed} m/sec`;
  const airHumidity = `${humidity} %`;

  return (
    <Flex
      marginTop="1"
      padding={['2', '4']}
      borderRadius="xl"
      bgColor="#404040"
      justify="space-between"
    >
      <Flex align="center">
        <DropIcon />
        <Text fontSize={['xs', 'md']}>
          {airHumidity}
        </Text>
      </Flex>
      <Text fontSize={['xs', 'md']}>
        {windSpeed}
      </Text>
      <Text fontSize={['xs', 'md']}>
        {feels}
      </Text>
    </Flex>
  );
};
