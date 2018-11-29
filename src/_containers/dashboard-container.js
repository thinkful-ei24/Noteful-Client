import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  reducer as notifReducer,
  actions as notifActions,
  Notifs
} from 'redux-notifications';

import './dashboard-container.css';

import DashNavigation from '../_components/dashNavigation-component';
import Points from '../_components/points-component';
import Keyboard from '../_components/keyboard-component';
import Feedback from '../_components/feedback-component';
import NoteDisplay from '../_components/note-display-component';
import NextButton from '../_components/next-button-component';

import { fetchNote } from '../_actions/notes-action';
import { getCards } from '../_actions/card-actions';

//TODO: add in trigger for this.props.dispatch(this.send()); on login
const { notifSend } = notifActions;
class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNote());
    this.props.dispatch(getCards());
  }

  send() {
    this.props.dispatch(notifSend)({
      message: `Hello, ${this.props.user.name}`,
      kind: 'info',
      dismissAfter: 3000
    });
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <Notifs />
        <div className="dashboard">
          <DashNavigation />

          <h1>You are learning the C Major notes</h1>
          <section className="dashboard-container">
            <div className="info">
              <div className="screen">
                <Points />
                <Feedback />
                <NextButton />
              </div>
              <NoteDisplay note={this.props.noteDisplayed} />
            </div>
            <Keyboard />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  noteDisplayed: state.note.noteDisplayed,
  nextNote: state.note.nextNote
});

export default connect(mapStateToProps)(Dashboard);
