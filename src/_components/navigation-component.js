import React from 'react';
import { NavLink } from 'react-router-dom';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import NavigationContainer from './navigation-styles';

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

const Navigation = () => (
  <NavigationContainer>
    <NavLink
      aria-label="Noteful Logo"
      to="/"
      className="logo"
      activeClassName="is-active"
      exact={true}
    >
      Noteful
    </NavLink>
    <NavLink
      aria-label="link to sign up page"
      to="/signup"
      activeClassName="is-active"
    >
      Sign Up
    </NavLink>
    <NavLink aria-label="link to login page" to="/login" className="button">
      Log In
    </NavLink>
  </NavigationContainer>
);

export default Navigation;
