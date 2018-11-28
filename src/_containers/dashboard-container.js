import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashNavigation from '../_components/dashNavigation-component';
import Points from '../_components/points-component';
import Keyboard from '../_components/keyboard-component';
import Feedback from '../_components/feedback-component';
import NoteDisplay from '../_components/note-display-component';

import { fetchNote, updateKeyboard, selectKey } from '../_actions/notes-action';
import { getCards } from '../_actions/card-actions';
import { incrementPoints, decrementPoints } from '../_actions/points-action';

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.noteDisplayed) {
      this.props.dispatch(fetchNote());
      this.props.dispatch(getCards());
    }
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

    //logic for displaying the next button
    let nextButton = this.props.keyboardDisabled ? (
      <button
        onClick={() => {
          //fetch the next note
          this.props.dispatch(fetchNote(this.props.nextNote));
          //set the keyboardDisabled back to false in order to display it again
          this.props.dispatch(updateKeyboard());
          //reset selectedKey to null after you click next
          this.props.dispatch(selectKey(null));
        }}
      >
        Next
      </button>
    ) : (
      ''
    );

    //if there isn't a selectedKey keep up the hello username message
    if (!this.props.selectedKey) {
      feedbackMessage = `Hello, ${this.props.user.name}`;
      feedbackType = 'general';
    }
    // if the note displayed and pressed are the same increment up a point
    // and  set the feedbackMessage and feedbackType to indicate success
    else if (this.props.noteDisplayed === this.props.selectedKey) {
      this.props.dispatch(incrementPoints());
      feedbackMessage = "You're correct!";
      feedbackType = 'correctGuess';
    }
    // if the note displayed and pressed are not the same decrement a point
    //and indicate the correct note inside the feedbackMessage
    else {
      this.props.dispatch(decrementPoints());
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
          {nextButton}
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
  keyboardDisabled: state.note.keyboardDisabled,
  nextNote: state.note.nextNote
});

export default connect(mapStateToProps)(Dashboard);
