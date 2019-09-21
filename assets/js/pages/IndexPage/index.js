import React, { useState } from 'react';

import MainLayout from 'src/layouts/MainLayout';
import Header from 'src/components/Header';
import Chat from 'src/components/Chat';
import ToggleButton from 'src/components/ToggleButton';

import useChannel from 'src/utils/useChannel';

import { Box, Flex, Text } from 'rebass';

const IndexPage = () => {
  const [chatVisible, setChatVisible] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);

  const [channelMsg, broadcast] = useChannel('room:lobby');

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  // Push a new message from channel to state
  const updateMessages = newMessage => {
    setChatMessages(prevState => [...prevState, newMessage]);
  };

  return (
    <MainLayout>
      <Header toggleButton={<ToggleButton toggled={chatVisible} toggleFunc={toggleChat} />} />

      <Box sx={{ position: 'relative' }}>
        <Flex width={1} flexWrap="wrap" p={3}>
          <Box width={chatVisible ? [1, 1, 1, 0.6] : 1}>
            <Box
              p={3}
              sx={{
                border: '2px solid black'
              }}
            >
              <Flex justifyContent="flex-end">
                <Text as="h3">Game Space</Text>
              </Flex>
            </Box>
          </Box>

          {chatVisible && (
            <Box width={[1, 1, 1, 0.4]} mt={[3, 3, 3, 0]}>
              <Box
                p={3}
                ml={[0, 0, 0, 3]}
                sx={{
                  border: '2px solid black'
                }}
              >
                <Flex justifyContent="flex-end">
                  <Text as="h3">Chat</Text>
                </Flex>
                <Chat
                  channelMsg={channelMsg}
                  broadcast={broadcast}
                  messages={chatMessages}
                  updateMessages={updateMessages}
                />
              </Box>
            </Box>
          )}
        </Flex>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;
