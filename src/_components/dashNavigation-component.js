import React from 'react';
import { NavLink } from 'react-router-dom';
import { clearAuthToken } from '../_actions/auth-action';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
        }}
      >
        Log In
      </button>
    </nav>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashNavigation);
