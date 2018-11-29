import { actions as notifActions, Notifs } from 'redux-notifications';
import React from 'react';
import { connect } from 'react-redux';
import { clearNotif } from '../_actions/auth-action';

import 'redux-notifications/lib/styles.css';

//set up notifications variable
const { notifSend } = notifActions;

export class Notifications extends React.Component {
  constructor() {
    super();
    window.NotifComponent = this;
  }

  send = () => {
    if (this.props.loggedIn) {
      this.props.dispatch(
        notifSend({
          message: `Hello there, ${
            this.props.user.name
          }. Welcome back to Noteful.`,
          kind: 'info',
          dismissAfter: 4000
        })
      );
      this.props.dispatch(clearNotif());
    }
  };

  render() {
    return <Notifs />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.notifLoggedIn,
  user: state.auth.user
});

export default connect(mapStateToProps)(Notifications);
