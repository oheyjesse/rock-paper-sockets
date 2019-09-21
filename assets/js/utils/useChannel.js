import { useContext, useEffect, useState } from 'react';
import SocketContext from 'src/contexts/SocketContext';

const useChannel = channelTopic => {
  const socket = useContext(SocketContext);
  const [state, setState] = useState(null);
  const [broadcast, setBroadcast] = useState(mustJoinChannelWarning);

  useEffect(() => {
    joinChannel(socket, channelTopic, setState, setBroadcast);
    //eslint-disable-next-line
  }, [channelTopic]);

  return [state, broadcast];
};

const joinChannel = (socket, channelTopic, setState, setBroadcast) => {
  const channel = socket.channel(channelTopic, { client: 'browser' });

  channel.onMessage = (event, payload) => {
    setState({ event, payload });
    return payload;
  };

  channel
    .join()
    .receive('ok', ({ messages }) =>
      console.log(`successfully joined channel ${channelTopic}`, messages || '')
    )
    .receive('error', ({ reason }) => console.error(`successfully joined channel ${channelTopic}`, reason));

  setBroadcast(() => channel.push.bind(channel));

  return () => {
    channel.leave();
  };
};

const mustJoinChannelWarning = () => () =>
  console.error('useChannel broadcast function cannot be invoked before the channel has been joined');

export default useChannel;
