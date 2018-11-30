import React from 'react';
import { connect } from 'react-redux';

import { getInitialPoints } from '../_actions/points-action';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import styled from 'styled-components';

const PointsContainer = styled.div`
  text-align: center;
  border: 1px solid #0fbf68;
  border-radius: 100px;
  font-family: omnes-pro, sans-serif;
  font-style: normal;
  letter-spacing: 2px;
  min-width: 72px;
  align-self: center;
  padding: 6px;
  margin-bottom: 20px;

  p {
    color: #0fbf68;
    font-weight: 600;
    font-size: 0.7em;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }

  span {
    font-size: 2.5em;
    font-weight: 100;
    line-height: 0.85em;
  }
`;

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

class Points extends React.Component {
  componentDidMount() {
    this.props.dispatch(getInitialPoints());
  }

  render() {
    return (
      <PointsContainer>
        <p>
          <span>{this.props.initialPoints + this.props.points}</span> points
        </p>
      </PointsContainer>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.card.cards,
  points: state.point.points,
  initialPoints: state.point.initialPoints
});

export default connect(mapStateToProps)(Points);
