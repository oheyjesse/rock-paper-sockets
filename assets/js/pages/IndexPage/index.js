import React, { useState } from 'react';

import MainLayout from 'src/layouts/MainLayout';
import Chat, { chatReducer, chatInitState } from 'src/components/Chat';

import useChannel from 'src/utils/useChannel';

import { Box, Button, Flex, Text } from 'rebass';

const IndexPage = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatVisible, setChatVisible] = useState(true);

  const [chatState, broadcast] = useChannel('room:lobby', chatReducer, chatInitState);

  // Push a new message from channel to state
  const updateMessages = newMessage => {
    setChatMessages(prevState => [...prevState, newMessage]);
  };

  const navItems = [
    <Button
      key="1"
      p={2}
      onClick={() => setChatVisible(!chatVisible)}
      color="text"
      bg={chatVisible ? 'primary' : 'secondary'}
    >
      Chat
    </Button>
  ];

  return (
    <MainLayout navItems={navItems}>
      <Box sx={{ position: 'relative' }}>
        <Flex width={1} flexWrap="wrap" p={3}>
          <Box width={chatVisible ? [1, 1, 1, 0.6] : 1}>
            <Box
              p={3}
              bg="backgroundSecondary"
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
                bg="backgroundSecondary"
                sx={{
                  border: '2px solid black'
                }}
              >
                <Flex justifyContent="flex-end">
                  <Text as="h3" mb={3}>
                    Chat
                  </Text>
                </Flex>
                <Chat
                  chatState={chatState}
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
IndexPage.displayName = 'IndexPage';
