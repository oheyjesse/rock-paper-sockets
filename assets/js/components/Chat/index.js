import React, { useState, useEffect, useRef } from 'react';

import { Box, Input, Button } from 'rebass';

const Chat = ({ channelMsg, broadcast, messages, updateMessages }) => {
  const inputRef = useRef(null);

  const initialState = {
    userInput: ''
  };

  // TODO: This is a hack. Remove it please
  useEffect(() => {
    setTimeout(() => inputRef.current.focus(), 150);
  }, []);

  useEffect(() => {
    if (!channelMsg) {
      return;
    }

    if (channelMsg.event === 'name_change') {
      const { payload } = channelMsg;
      updateMessages(`${payload.old_name} changed their name to ${payload.new_name}`);
    }

    updateMessages(channelMsg.payload.body);
    //eslint-disable-next-line
  }, [channelMsg]);

  const [state, setState] = useState(initialState);
  const { userInput } = state;

  if (!channelMsg) {
    return null;
  }

  // Update userInput state onChange function
  const handleInput = event => {
    const { value } = event.target;
    setState(prevState => ({ ...prevState, userInput: value }));
  };

  // Send a message via channel
  const sendMessage = () => {
    if (userInput.startsWith('/name ')) {
      const name = userInput.split(' ', 2)[1];
      return broadcast('set_name', { name: name });
    }

    broadcast('new_msg', { body: userInput });

    inputRef.current.focus();
  };

  // If enter pressed
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Box width={1}>
      {messages && messages.map((message, i) => <div key={`chat-${i}`}>{message}</div>)}

      <input
        ref={inputRef}
        type="text"
        value={state.userInput}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />

      <Button color="black" bg="turquoise" onClick={sendMessage}>
        Send!
      </Button>
    </Box>
  );
};

export default Chat;
