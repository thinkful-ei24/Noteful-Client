import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import DashNavigation from '../_components/dashNavigation-component';
import Points from '../_components/points-component';
import Keyboard from '../_components/keyboard-component';
import Feedback from '../_components/feedback-component';
import NoteDisplay from '../_components/note-display-component';

import { fetchNote, updateKeyboard, selectKey, clearNoteDisplayed } from '../_actions/notes-action';
import { getCards } from '../_actions/card-actions';
import { incrementPoints, decrementPoints } from '../_actions/points-action';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNote());
    this.props.dispatch(getCards());
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }





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
          //clear noteDisplayed
          this.props.dispatch(clearNoteDisplayed());
        }}
      >
        Next
      </button>
    ) : ('');
    console.log('rerender');
    return (
      <div className="dashboard">
        <DashNavigation />
        <div className="dashboard-container">
          <Points />
          <Feedback />
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
  keyboardDisabled: state.note.keyboardDisabled,
  nextNote: state.note.nextNote
});

export default connect(mapStateToProps)(Dashboard);
