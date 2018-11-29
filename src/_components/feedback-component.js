import React from 'react';
import { connect } from 'react-redux';
require('./feedback-component.css');

export class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackTypes: {
        general: '#F1BB01',
        correctGuess: '#0FBF68',
        incorrectGuess: '#DB3D0E'
      }
    };
  }

  //Logic for feedback content and points count
  //based on user selecting the correct or incorrect key
  render() {
    //variables for feedback content
    let feedbackMessage;
    let feedbackType;
    //if there isn't a selectedKey keep up the hello username message
    if (!this.props.selectedKey) {
      feedbackMessage = 'What note is this?';
      feedbackType = 'general';
    }
    // if the note displayed and pressed are the same increment up a point
    // and  set the feedbackMessage and feedbackType to indicate success
    else if (this.props.noteDisplayed === this.props.selectedKey) {
      feedbackMessage = "You're correct!";
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
      <div
        className="feedback-container"
        style={{ color: this.state.feedbackTypes[feedbackType] }}
      >
        <h2 id="feedback-message">{feedbackMessage}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  noteDisplayed: state.note.noteDisplayed,
  selectedKey: state.note.selectedKey
});

export default connect(mapStateToProps)(Feedback);
