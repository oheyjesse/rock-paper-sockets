import React, { useState } from 'react';

import Header from 'src/components/Header';

import { Box, Flex } from 'rebass';

const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const MainLayout = ({ children, navItems }) => {
  const [chatVisible, setChatVisible] = useState(true);

  return (
    <Box bg="background">
      <Header height={4} navItems={navItems} />

      <Flex height={vh - 62} width={1} justifyContent="center">
        <Box width={(1, 1, 0.8)}>{children}</Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
MainLayout.displayName = 'IndexPage';
