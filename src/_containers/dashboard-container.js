import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './dashboard-container.css';

import DashNavigation from '../_components/dashNavigation-component';
import Points from '../_components/points-component';
import Keyboard from '../_components/keyboard-component';
import Feedback from '../_components/feedback-component';
import NoteDisplay from '../_components/note-display-component';
import NextButton from '../_components/next-button-component';
import Notifications from '../_components/notifications-component';

import { fetchNote } from '../_actions/notes-action';
import { getCards } from '../_actions/card-actions';

//TODO: add in trigger for this.props.dispatch(this.send()); on login
class Dashboard extends React.Component {
  async componentDidMount() {
    await this.props.dispatch(fetchNote());
    await this.props.dispatch(getCards());
    window.NotifComponent.send();
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <Notifications />
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
