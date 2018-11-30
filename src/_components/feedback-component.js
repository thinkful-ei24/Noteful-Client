import React from 'react';
import { connect } from 'react-redux';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import styled from 'styled-components';

const FeedbackContainer = styled.div`
  vertical-align: middle;
  color: ${props => props.feedbackType};

  h2#feedback-message {
    vertical-align: middle;
    text-align: center;
    margin: 0;
    line-height: 1.15em;
    margin-top: 20px;
  }
`;

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

export class Feedback extends React.Component {
  //Logic for feedback content and points count
  //based on user selecting the correct or incorrect key
  render() {
    //variables for feedback content
    let feedbackMessage;
    let feedbackType;
    //if there isn't a selectedKey keep up the hello username message
    if (!this.props.selectedKey) {
      feedbackMessage = 'What note is this?';
      feedbackType = '#F1BB01';
    }
    // if the note displayed and pressed are the same increment up a point
    // and  set the feedbackMessage and feedbackType to indicate success
    else if (this.props.noteDisplayed === this.props.selectedKey) {
      feedbackMessage = "You're correct!";
      feedbackType = '#0FBF68';
    }
    // if the note displayed and pressed are not the same decrement a point
    //and indicate the correct note inside the feedbackMessage
    else {
      feedbackMessage = `Oops, the correct answer is ${
        this.props.noteDisplayed
      }`;
      feedbackType = '#DB3D0E';
    }

    return (
      <FeedbackContainer feedbackType={feedbackType}>
        <h2 id="feedback-message">{feedbackMessage}</h2>
      </FeedbackContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  noteDisplayed: state.note.noteDisplayed,
  selectedKey: state.note.selectedKey
});

export default connect(mapStateToProps)(Feedback);
