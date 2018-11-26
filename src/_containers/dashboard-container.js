import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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

    //Logic for feedback content and points count
    //based on user selecting the correct or incorrect key

    //variables for feedback content
    let feedbackMessage;
    let feedbackType;

    //if there isn't a selectedKey keep up the hello username message
    if (!this.props.selectedKey) {
      feedbackMessage = `Hello, ${this.props.user.name}`;
      feedbackType = 'general';
    }
    // if the note displayed and pressed are the same increment up a point
    // and  set the feedbackMessage and feedbackType to indicate success
    else if (this.props.noteDisplayed === this.props.selectedKey) {
      feedbackMessage = 'You\'re correct!';
      feedbackType = 'correctGuess';
    }
    // if the note displayed and pressed are not the same decrement a point
    //and indicate the correct note inside the feedbackMessage
    else {
      feedbackMessage = `Oops, the correct answer is ${
        this.props.noteDisplayed
      }`;
      feedbackType = 'incorrectGuess';
    }

    return (
      <div className="dashboard">
        <DashNavigation />
        <div className="dashboard-container">
          <Points />
          <Feedback message={feedbackMessage} feedbackType={feedbackType} />
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
  selectedKey: state.note.selectedKey,
  nextNote: state.note.nextNote
});

export default connect(mapStateToProps)(Dashboard);
