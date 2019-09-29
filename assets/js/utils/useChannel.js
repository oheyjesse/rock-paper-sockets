import { useContext, useEffect, useReducer, useState } from 'react';
import SocketContext from 'src/contexts/SocketContext';

const useChannel = (channelTopic, reducer, initialState) => {
  // pull in the connected socket
  const socket = useContext(SocketContext);

  // set up a reducer as an "inbox" for received channel messages
  // pass your reducer in on channel creation with handlers for different
  // message events
  const [state, dispatch] = useReducer(reducer, initialState);
  // set up a broadcast function which will be bound to channel.push(),
  // for pushing messages to the connected channel
  const [broadcast, setBroadcast] = useState(mustJoinChannelWarning);

  // join the channel, bind the channel.push to 'broadcast'
  useEffect(() => {
    joinChannel(socket, channelTopic, dispatch, setBroadcast);
    //eslint-disable-next-line
  }, [channelTopic]);

  return [state, broadcast];
};

const joinChannel = (socket, channelTopic, dispatch, setBroadcast) => {
  // Join the channel provided
  const channel = socket.channel(channelTopic, { client: 'browser' });

  channel
    .join()
    .receive('ok', ({ messages }) => console.log(`Channel joined: ${channelTopic}`, messages || ''))
    .receive('error', ({ reason }) => console.error(`Channel join FAIL: ${channelTopic}`, reason));

  // listen for new messages and update the reducer state
  channel.onMessage = (event, payload) => {
    dispatch({ event, payload });
    return payload;
  };

  // bind 'broadcast' to this channel's "push" function, for sending messages
  setBroadcast(() => channel.push.bind(channel));

  // joinChannel returns a function which can be invoked in order to leave
  return () => {
    channel.leave();
  };
};

const mustJoinChannelWarning = () => () =>
  console.error('useChannel broadcast function cannot be invoked before the channel has been joined');

export default useChannel;
