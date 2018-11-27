import React from 'react';
import { connect } from 'react-redux';
import { getCards } from '../_actions/card-actions';

require('./score-display-component.css');

function ScoreDisplay(props) {
  let curPoints = 5;
  let totalPoints = 10;
  const fetchCards = () => {
    props.dispatch(getCards());
  }

  return (
    <div className="score-display-container">
    {/* change these */}
    <h2>You have {curPoints} points</h2>
    <h3>total {totalPoints}</h3>
    <h3>{fetchCards}</h3>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  cards: state.card.cards
});

export default connect(mapStateToProps)(ScoreDisplay);