import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashNavigation from '../_components/dashNavigation-component';
import Keyboard from '../_components/keyboard-component';
import Feedback from '../_components/feedback-component';
import NoteDisplay from '../_components/note-display-component';
import { fetchNote } from '../_actions/notes-action';

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

    //function to handle logic of feedback
    // if props.noteDisplayed === props.selectedKey
    // variable message = you're correct
    // else variable message = Oops, the correct answer is props.noteDisplayed

    return (
      <div className="dashboard">
        <DashNavigation />
        <div className="dashboard-container">
          {/* <Feedback
          message={`Hello, ${props.user.name}!`}
          feedbackType="general"
          guessCount="5"
        />
        <Feedback message={`You're correct!`} feedbackType="correctGuess" /> */}
          <Feedback
            message={'Oops, the correct answer is '}
            feedbackType="incorrectGuess"
          />
          <NoteDisplay note={this.props.noteDisplayed} />
          <Keyboard />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  noteDisplayed: state.note.noteDisplayed,
  selectedKey: null
});

export default connect(mapStateToProps)(Dashboard);
