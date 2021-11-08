import { FC } from 'react';
import {
  Box, Flex, Heading, Link,
} from '@chakra-ui/react';
import { InputCity } from './ui/inputCity';

export const Header: FC = () => (
  <Flex
    paddingX={['1', '6']}
    paddingY={['1', '2', 'none']}
    bgColor="#262624"
    color="#c7c3b9"
    justify="space-between"
    align="center"
  >
    <Box display={['none', 'block']}>
      <Link
        isExternal
        href="https://cv.djinni.co/fe/19ab4e344c6c49451e5ae4dabbe56a/PiloianCV.pdf"
      >
        toCV
      </Link>
    </Box>
    <Heading
      size="md"
      padding="1%"
      align="center"
    >
      Weather
    </Heading>
    <InputCity />
  </Flex>
);
