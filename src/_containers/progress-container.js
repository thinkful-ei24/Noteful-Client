import React from 'react';
import { connect } from 'react-redux';

require('./progress-container.css');

function ProgressDisplay(props) {
  const notes = props.cards.map((card, index) => {
    return (
      <div id="note-*" key={index}>
        {/* image of note? */}
        <h2>{card.note}</h2>
        <h3 id="correct-count">{card.correct}</h3>
        <h3 id="incorrect-count">{card.incorrect}</h3>
      </div>
    )
  })

  return (
    <div className="score-display-container">
    {/* change these */}
      <ol>
        {notes}
      </ol>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  cards: state.card.cards
});

export default connect(mapStateToProps)(ProgressDisplay);