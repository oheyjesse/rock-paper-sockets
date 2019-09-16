import * as React from 'react';

import { Box, Flex, Text } from 'rebass';

const Header = () => (
  <Box
    width={1}
    mb={2}
    p={2}
    css={{
      borderBottom: '2px solid',
      borderColor: 'black'
    }}
  >
    <Flex width={1} justifyContent="center" alignItems="center">
      <Box width="auto">
        <Text as="h2" css={{ whiteSpace: 'nowrap' }}>
          <span role="img" aria-label="the hand-guesture scissors emoji">
            ✌️
          </span>{' '}
          Rock/Paper/Scissors!
        </Text>
      </Box>

      <Flex width="100%" m="auto" justifyContent="flex-end" alignItems="center">
        hi
      </Flex>
    </Flex>
  </Box>
);

export default Header;
