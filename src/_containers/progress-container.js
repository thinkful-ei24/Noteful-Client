import React from 'react';
import { connect } from 'react-redux';

import { getCards } from '../_actions/card-actions';
import DashNavigation from '../_components/dashNavigation-component';
require('./progress-container.css');

class ProgressDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCards());
  }

  render() {
    let notes = this.props.cards.map((card, index) => {
      return (
        <div id="note-*" key={index}>
          {/* image of note? */}
          <h2>{card.note}</h2>
          <h3 id="correct-count">{card.correct}</h3>
          <h3 id="incorrect-count">{card.total - card.correct}</h3>
        </div>
      );
    });

    return (
      <div className="dashboard">
        <DashNavigation />
        <div className="score-display-container">
          {/* change these */}
          <ol>{notes}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  cards: state.card.cards
});

export default connect(mapStateToProps)(ProgressDisplay);
