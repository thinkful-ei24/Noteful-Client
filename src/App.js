import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogIn from './_containers/login-container';
import NotFound from './pages/not-found';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LogIn} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
