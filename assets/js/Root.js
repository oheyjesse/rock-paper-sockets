import * as React from 'react';

import { ThemeProvider } from 'theme-ui';
import theme from './theme';

import Routes from './Routes';

const Root = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

export default Root;
