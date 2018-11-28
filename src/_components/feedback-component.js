import React from 'react';
import {
  connect
} from 'react-redux';
require('./feedback-component.css');

export class Feedback extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        key: this.props.guessCount,
        message: this.props.message,
        type: this.props.feedbackType,
        feedbackTypes: {
          general: 'yellow',
          correctGuess: 'green',
          incorrectGuess: 'red'
        },
      }
    }

    //Logic for feedback content and points count
    //based on user selecting the correct or incorrect key
  render() {
    //variables for feedback content
    let feedbackMessage = ''
    let feedbackType = '';
    //if there isn't a selectedKey keep up the hello username message
    if (!this.props.selectedKey) {
      feedbackMessage = `Hello, ${this.props.user.name}`;
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
      feedbackMessage = `Oops, the correct answer is ${this.props.noteDisplayed}`;
      feedbackType = 'incorrectGuess';
    }

    return (
      <div
        className="feedback-container"
        style={{ backgroundColor: this.state.feedbackTypes.type }}
      >
        <h2 key={this.state.key} id="feedback-message">
          {this.state.message}
        </h2>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.auth.user,
  noteDisplayed: state.note.noteDisplayed,
  selectedKey: state.note.selectedKey,
});

export default connect(mapStateToProps)(Feedback);