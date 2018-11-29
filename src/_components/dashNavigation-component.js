import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearAuthToken } from '../_actions/auth-action';
import { clearPoints } from '../_actions/points-action';
import { clearNote } from '../_actions/notes-action';
import { clearCard } from '../_actions/card-actions';

import styled from 'styled-components';

const Navigation = styled.nav`
  max-width: 95%;
  margin: 20px auto;
  display: grid;
  align-items: center;
  grid-template-columns: 10fr 1fr 1fr;
  text-align: center;

  .logo {
    font-family: filson-pro, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 1.85em;
    text-decoration: none;
    text-transform: uppercase;
    color: #1b1b1e;
    letter-spacing: 4px;
    text-align: left;
    padding: 20px;
  }

  .logo.is-active {
    text-decoration: none;
  }

  a {
    color: #1b1b1e;
    text-decoration: none;
    font-size: 1em;
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 20px;
  }

  a.is-active {
    text-decoration: underline;
  }

  button {
    margin: 10px 0;
    height: 43px;
    border: 2px solid #fff;
    border-radius: 28px;
    background: #f1bb01;
    color: #735a02;
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 2px;
    font-weight: 600;
  }

  button:active,
  button:focus {
    outline: #f6f6f0;
  }
`;

const DashNavigation = props => {
  return (
    <Navigation>
      <NavLink
        aria-label="Noteful Logo"
        to="/dashboard"
        className="logo"
        activeClassName="is-active"
      >
        Noteful
      </NavLink>
      <NavLink
        aria-label="link to progress page"
        to="/progress"
        activeClassName="is-active"
      >
        Progress
      </NavLink>
      <button
        onClick={() => {
          props.dispatch(clearAuthToken());
          localStorage.clear();
          props.dispatch(clearNote());
          props.dispatch(clearPoints());
          props.dispatch(clearCard());
        }}
      >
        Log Out
      </button>
    </Navigation>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export default connect(mapStateToProps)(DashNavigation);
