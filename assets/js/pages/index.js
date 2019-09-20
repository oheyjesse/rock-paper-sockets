import React, { useState, useEffect } from 'react';

import MainLayout from '../layouts/MainLayout';

import { Socket } from 'phoenix';

let socket = new Socket('/socket', { params: { token: window.userToken } });
socket.connect();

const channel = socket.channel('room:lobby', {});
channel
  .join()
  .receive('ok', resp => {
    console.log('Joined successfully', resp);
  })
  .receive('error', resp => {
    console.log('Unable to join', resp);
  });

const HomePage = () => {
  const initialState = {
    chatMessages: [],
    chatInput: ''
  };
  const [state, setState] = useState(initialState);
  const { chatMessages, chatInput } = state;

  // onComponentMount hooks replacement. Subscribes to chat messages
  useEffect(() => {
    channel.on('new_msg', payload => {
      updateMessages(payload.body);
    });
  }, []);

  // Push a new message from channel to state
  const updateMessages = newMessage => {
    setState(prevState => ({ ...prevState, chatMessages: [...prevState.chatMessages, newMessage] }));
  };

  // Update input state onChange function
  const handleInput = event => {
    const { value } = event.target;
    setState(prevState => ({ ...prevState, chatInput: value }));
  };

  // Send a message via channel
  const sendMessage = () => {
    channel.push('new_msg', { body: chatInput });
  };

  return (
    <MainLayout>
      <div>Messages!</div>

      {chatMessages && chatMessages.map((message, i) => <div key={`chat-${i}`}>{message}</div>)}

      <input type="text" value={state.chatInput} onChange={handleInput} />

      <button onClick={sendMessage}>Send!</button>
    </MainLayout>
  );
};

export default HomePage;
