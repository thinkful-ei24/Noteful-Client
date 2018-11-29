import React from 'react';
import { connect } from 'react-redux';

import './points-component.css';

import { getInitialPoints } from '../_actions/points-action';
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
    this.props.dispatch(getInitialPoints());
  }

  render() {
    return (
      <div className="points-container">
        <p>
          <span>{this.props.initialPoints + this.props.points}</span> points
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card.cards,
  points: state.point.points,
  initialPoints: state.point.initialPoints
});

export default connect(mapStateToProps)(Points);
