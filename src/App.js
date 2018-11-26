import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import SignUp from './_containers/signup-container';
import LoginForm from './_containers/login-container';
import NotFound from './pages/not-found';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LoginForm} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
