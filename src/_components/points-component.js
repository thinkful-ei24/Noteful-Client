import React from 'react';
import { connect } from 'react-redux';

import { getCards } from '../_actions/card-actions';
import { incrementPoints } from '../_actions/points-action';
//display points with copy 'you have X points'
// x =
//run getCards action
// take total cards and add all the total values together
// add up the correct values
// points display  correct - (total - correct)

// Total    1 + 1 + 1 + 1 = 4
// Correct  0 + 1 + 1 + 0 = 2
// 2 - (4 -2) = 0

//save points to state

class Points extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCards());
  }

  render() {
    //FIXME: remaining issue with old state - even alt user's old state
    //being displayed when a user first logs in until they refresh
    //may need to move logic out of render
    let total = 0;
    let correct = 0;
    //tally up total cards answered and correct answers
    this.props.cards.forEach(card => {
      total += card.total;
      correct += card.correct;
    });

    // initial points
    let initialPoints = correct - (total - correct);

    console.log('initial points', initialPoints);
    console.log('props points', this.props.points);
    return (
      <div>
        <p>You have {initialPoints + this.props.points} points</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card.cards,
  points: state.point.points
});

export default connect(mapStateToProps)(Points);
