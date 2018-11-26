import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav role="navigation">
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
    <NavLink
      aria-label="link to login page"
      to="/login"
      activeClassName="is-active"
    >
      Log In
    </NavLink>
  </nav>
);

export default Navigation;
