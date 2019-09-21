import * as React from 'react';

import { ThemeProvider, Styled } from 'theme-ui';

import SocketProvider from './contexts/SocketProvider';
import theme from './theme';

import Routes from './Routes';

const Root = () => (
  <ThemeProvider theme={theme}>
    {/* Provide default MDX Styles as Root styles via heme.styles */}
    <Styled.root>
      {/* Setup for Sockets */}
      <SocketProvider wsUrl={'/socket'} options={{ token: 'token' }}>
        {/* Main components inside */}
        <Routes />
      </SocketProvider>
    </Styled.root>
  </ThemeProvider>
);

export default Root;
