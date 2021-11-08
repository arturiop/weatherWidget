/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import {
  Button,
  Input,
  Flex,
  Box,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getCityWeather } from '../../features/citiesWeather/actions';
import { setError } from '../../features/citiesWeather/weatherSlice';

export const InputCity: FC = () => {
  const [inputState, setInputState] = useState('');
  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch();

  const setValue = (e: any) => {
    setInputState(e.target.value);
  };

  const sendCityName = () => {
    setDisable(() => true);
    dispatch(getCityWeather(inputState));
    setInputState('');
    setDisable(() => false);
  };

  const addCity = () => {
    if (inputState.length < 2) {
      return dispatch(setError('city name too short'));
    }
    return sendCityName();
  };

  return (
    <Box>
      <Flex>
        <Box borderLeftRadius="xl" bgColor="gray.300">
          <Input
            size="sm"
            color="gray.700"
            borderRightRadius="none"
            placeholder="City Name"
            value={inputState}
            onChange={setValue}
          />
        </Box>
        <Button
          size="sm"
          color="gray.700"
          borderLeftRadius="none"
          onClick={addCity}
          disabled={disable}
        >
          search
        </Button>
      </Flex>
    </Box>
  );
};
