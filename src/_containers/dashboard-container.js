import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashNavigation from '../_components/dashNavigation-component';
import Keyboard from '../_components/keyboard-component';

const Dashboard = props => {
  if (!props.loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="dashboard">
      <DashNavigation />
      <div className="dashboard-container">
        Welcome, insert person's name here.
        <Keyboard />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export default connect(mapStateToProps)(Dashboard);
