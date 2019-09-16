import * as React from 'react';
import { Router } from '@reach/router';

import HomePage from './pages';

const Routes = () => (
  <Router>
    <HomePage path="/" />
  </Router>
);

export default Routes;
