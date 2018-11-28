import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashNavigation from '../_components/dashNavigation-component';
import Keyboard from '../_components/keyboard-component';
import Feedback from '../_components/feedback-component';
import NoteDisplay from '../_components/note-display-component';
import { fetchNote, updateKeyboard, selectKey } from '../_actions/notes-action';

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.noteDisplayed) {
      this.props.dispatch(fetchNote());
    }
  }
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    //Feedback based on keyboard and
    let feedbackMessage;
    let feedbackType;
    let nextButton = this.props.keyboardDisabled ? (
      <button
        onClick={() => {
          this.props.dispatch(fetchNote(this.props.nextNote));
          this.props.dispatch(updateKeyboard());
          this.props.dispatch(selectKey(null));
        }}
      >
        Next
      </button>
    ) : (
      ''
    );

    if (!this.props.selectedKey) {
      feedbackMessage = `Hello, ${this.props.user.name}`;
      feedbackType = 'general';
    } else if (this.props.noteDisplayed === this.props.selectedKey) {
      feedbackMessage = 'You\'re correct!';
      feedbackType = 'correctGuess';
    } else {
      feedbackMessage = `Oops, the correct answer is ${
        this.props.noteDisplayed
      }`;
      feedbackType = 'incorrectGuess';
    }

    console.log('the note displayed:', this.props.noteDisplayed);
    console.log('the key selected:', this.props.selectedKey);
    console.log('keyboard disabled:', this.props.keyboardDisabled);
    return (
      <div className="dashboard">
        <DashNavigation />
        <div className="dashboard-container">
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
