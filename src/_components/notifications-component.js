import { actions as notifActions, Notifs } from 'redux-notifications';
import React from 'react';
import { connect } from 'react-redux';
import { clearNotif } from '../_actions/auth-action';

const { notifSend } = notifActions;

export class Notifications extends React.Component {
  constructor(props) {
    super(props);
    window.NotifComponent = this;
  }

  send() {
    if (this.props.loggedIn) {
      this.props.dispatch(
        notifSend({
          message: `Hello, ${this.props.user.name}`,
          kind: 'info',
          dismissAfter: 3000
        })
      );
      this.props.dispatch(clearNotif());
    }
  }

  render() {
    return <Notifs />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.notifLoggedIn,
  user: state.auth.user
});

export default connect(mapStateToProps)(Notifications);
