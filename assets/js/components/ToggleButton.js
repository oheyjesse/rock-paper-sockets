import React from 'react';

import { Flex, Text } from 'rebass';

const ToggleButton = ({ toggled, toggleFunc }) => (
  <Flex
    p={2}
    onClick={toggleFunc}
    bg={toggled ? 'turquoise' : 'grey'}
    sx={{
      border: '2px solid black',
      userSelect: 'none'
    }}
    justifyContent="center"
    alignItems="center"
  >
    <Text as="span">Chat</Text>
  </Flex>
);

export default ToggleButton;
