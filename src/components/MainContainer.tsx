import { FC, ReactChild } from 'react';
import { Box } from '@chakra-ui/react';
import { Header } from './Header';

type PropsType = {
  children: ReactChild
};
export const MainContainer: FC<PropsType> = ({ children }:PropsType) => (
  <Box
    bgColor="#d9d6d0"
    minW="280px"
    minH="100vh"
  >
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="9999"
    >
      <Header />
    </Box>
    <Box as="main">
      {children}
    </Box>
  </Box>
);
