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

import { fetchNote } from '../_actions/notes-action';
import { getCards } from '../_actions/card-actions';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNote());
    this.props.dispatch(getCards());
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div className="dashboard">
        <DashNavigation />
        <div className="dashboard-container">
          <Points />
          <Feedback />
          <NoteDisplay note={this.props.noteDisplayed} />
          <Keyboard />
          <NextButton />
        </div>
      </div>
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
