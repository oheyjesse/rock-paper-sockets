import * as React from 'react';
import { Router } from '@reach/router';

import Index from './pages/IndexPage/';

const Routes = () => (
  <Router>
    <Index path="/" />
  </Router>
);

export default Routes;
