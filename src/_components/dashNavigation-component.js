import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { clearAuthToken } from '../_actions/auth-action';
import { clearPoints } from '../_actions/points-action';
import { clearNote } from '../_actions/notes-action';
import { clearCard } from '../_actions/card-actions';

const DashNavigation = props => {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <nav role="navigation">
      <NavLink
        aria-label="Noteful Logo"
        to="/dashboard"
        className="logo"
        activeClassName="is-active"
        exact={true}
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
    </nav>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export default connect(mapStateToProps)(DashNavigation);
