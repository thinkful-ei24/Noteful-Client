import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getCards } from '../_actions/card-actions';
import DashNavigation from '../_components/dashNavigation-component';
import placeholder from '../logo.svg';
require('./progress-container.css');

const ProgressContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  
  h2 {
    font-family: omnes-pro, sans-serif;
    font-size: 4rem;
    margin: 0;
  }

  img {
    width: auto;
    height: 80px;
    margin: 0;
    align-self: flex-end;
  }
`;

const ProgressNote = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80%;
  flex-direction: column;

  @media (min-width: 550px) {
    width: 45%
  }

  @media (min-width: 720px) {
    width: 28%
  }
`;

// Display progress bar (green and red)
const ProgressBar = styled.div`
  display: flex;
  height: 30px;

  .correct-bar {
    width: ${props => props.incomplete ? 100 : props.correct}%;
    background-color: ${props => props.incomplete ? 'black' : 'green'};
  }
  .incorrect-bar {
    width: ${props => props.incomplete ? 0 : props.incorrect}%;
    background-color: red;
  }
`;

// Display correct and incorrect text
const ProgressCount = styled.div`
  display: flex;
  justify-content: space-around;

  h3 {
    font-family: omnes-pro, sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    margin: 10px 0;
  }
`;

class ProgressDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCards());
  }

  render() {
    let notes = this.props.cards.map((card, index) => {
      let correctSize = 0;
      let incorrectSize = 0;
      let incomplete = true;
      if (card.total) {
        correctSize = card.correct / card.total * 100;
        incorrectSize = (card.total - card.correct) / card.total * 100;
        incomplete = false;
      }

      return (
        <ProgressNote id={`note-${card.note}`} key={index}>
          <ProgressHeader>
            <h2>{card.note}</h2>
            <img src={placeholder} alt={`${card.note} note`} />
          </ProgressHeader>
          <ProgressBar correct={correctSize} incorrect={incorrectSize} incomplete={incomplete}>
            <div className="correct-bar"></div>
            <div className="incorrect-bar"></div>
          </ProgressBar>
          <ProgressCount>
            <h3 id="correct-count">{card.correct}</h3>
            <h3 id="incorrect-count">{card.total - card.correct}</h3>
          </ProgressCount>
        </ProgressNote>
      );
    });

    return (
      <div className="dashboard">
        <DashNavigation />
        <ProgressContainer className="score-display-container">
          {/* change these */}
          {notes}
        </ProgressContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  cards: state.card.cards
});

export default connect(mapStateToProps)(ProgressDisplay);
