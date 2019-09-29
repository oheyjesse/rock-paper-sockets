import React, { useState } from 'react';

import { Box, Button, Flex, Text } from 'rebass';
import { Input } from '@rebass/forms';

export const chatInitState = { messages: [] };

export const chatReducer = (state, { event, payload }) => {
  switch (event) {
    case 'new_msg':
      return {
        ...state,
        messages: [
          ...state.messages,
          <Text key={`chat-${state.messages.length}`}>
            {payload.name}: {payload.body}
          </Text>
        ]
      };
    case 'name_change':
      return {
        ...state,
        messages: [
          ...state.messages,
          <Text fontStyle="italic" key={`chat-${state.messages.length}`}>
            {payload.old_name} changed their name to {payload.new_name}
          </Text>
        ]
      };
    default:
      return state;
  }
};

const Chat = ({ chatState, broadcast }) => {
  const { messages } = chatState;
  const [userInput, setUserInput] = useState('');

  if (!chatState) {
    return null;
  }

  // Send a message via channel
  const sendMessage = () => {
    if (userInput.startsWith('/name ')) {
      const name = userInput.split(' ', 2)[1];
      broadcast('set_name', { name: name });
      return setUserInput('');
    }

    broadcast('new_msg', { body: userInput });
    setUserInput('');
  };

  // Update userInput state onChange function
  const handleInput = event => {
    const { value } = event.target;
    setUserInput(value);
  };

  // If enter pressed
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Box width={1}>
      {messages && messages.map(message => message)}

      <Flex>
        <Input
          bg="background"
          type="text"
          value={userInput}
          onChange={handleInput}
          onKeyPress={handleKeyPress}
        />

        <Button ml={3} px={3} color="black" bg="turquoise" onClick={sendMessage}>
          Send!
        </Button>
      </Flex>
    </Box>
  );
};

export default Chat;
