import React, { useEffect, useRef } from 'react';
import { Socket } from 'phoenix';

import SocketContext from '../contexts/SocketContext';

const SocketProvider = ({ wsUrl, options, children }) => {
  const socket = new Socket(wsUrl, { params: options });

  // Used to get around useEffect dependency eslint warnings
  const socketRef = useRef(socket);

  useEffect(() => {
    socketRef.current.connect();
  }, [options, wsUrl]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;
