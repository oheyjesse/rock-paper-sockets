import * as React from 'react';

import { Box, Flex, Text } from 'rebass';

const Header = ({ navItems }) => {
  return (
    <Box
      width={1}
      p={2}
      bg="backgroundSecondary"
      sx={{
        borderBottom: '2px solid',
        borderColor: 'black'
      }}
    >
      <Flex width={1} justifyContent="center" alignItems="center">
        <Box width="auto">
          <Text as="h2" fontFamily="body" sx={{ whiteSpace: 'nowrap' }}>
            <span role="img" aria-label="the hand-guesture scissors emoji">
              ✌️
            </span>{' '}
            Rock/Paper/Sockets!
          </Text>
        </Box>

        <Flex width="100%" m="auto" justifyContent="flex-end" alignItems="center">
          {navItems.map(item => item)}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
