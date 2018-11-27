
import React from 'react';

require('./feedback.css');

export default function feedback(props) {
  const key = props.guessCount;
  const message = props.message;
  const type = props.feedbackType;
  const feedbackTypes = {
    general: 'yellow',
    correctGuess: 'green',
    incorrectGuess: 'red',
  };

  return (
    <div className="feedback-container" style={{'backgroundColor': feedbackTypes[type]}} >
      <h2 key={key} id='feedback-message'>{message}</h2>
    </div>
  );
}