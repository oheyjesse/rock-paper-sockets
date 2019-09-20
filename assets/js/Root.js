import * as React from 'react';

import { ThemeProvider } from 'theme-ui';

import SocketProvider from './contexts/SocketProvider';
import theme from './theme';

import Routes from './Routes';

const Root = () => (
  <ThemeProvider theme={theme}>
    <SocketProvider wsUrl={'/socket'} options={{ token: 'token' }}>
      <Routes />
    </SocketProvider>
  </ThemeProvider>
);

export default Root;
