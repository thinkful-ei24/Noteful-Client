import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearAuthToken } from '../_actions/auth-action';
import { clearPoints } from '../_actions/points-action';
import { clearNote } from '../_actions/notes-action';
import { clearCard } from '../_actions/card-actions';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import NavigationContainer from './navigation-styles';

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

const DashNavigation = props => {
  if (!localStorage.getItem('authToken')) {
    return <Redirect to="/" />;
  }

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export default connect(mapStateToProps)(DashNavigation);
