import * as React from 'react';

import { Box, Flex } from 'rebass';

import Header from '../components/Header';

const MainLayout = ({ children }) => (
  <Flex width={1} justifyContent="center">
    <Box width={(1, 1, 0.8)}>
      <Header />
      {children}
    </Box>
  </Flex>
);

export default MainLayout;
