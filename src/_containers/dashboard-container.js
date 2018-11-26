import React from 'react';
import { connect } from 'react-redux';

//import DashNavigation from '../_components/dashNavigation.component';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        {/* <DashNavigation /> */}
        <div className="dashboard-container">
          Welcome, insert person's name here.
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Dashboard);
