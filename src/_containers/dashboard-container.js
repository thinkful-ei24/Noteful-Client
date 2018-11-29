import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  reducer as notifReducer,
  actions as notifActions,
  Notifs
} from 'redux-notifications';

import styled from 'styled-components';

import DashNavigation from '../_components/dashNavigation-component';
import Points from '../_components/points-component';
import Keyboard from '../_components/keyboard-component';
import Feedback from '../_components/feedback-component';
import NoteDisplay from '../_components/note-display-component';
import NextButton from '../_components/next-button-component';

import { fetchNote } from '../_actions/notes-action';
import { getCards } from '../_actions/card-actions';

//TODO: add in trigger for this.props.dispatch(this.send()); on login
const { notifSend } = notifActions;

//Styles for Dash
const DashboardContainer = styled.section`
  background: #545559;
  max-width: 960px;
  min-height: 590px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 7px 7px #1b1b1e;
  margin-bottom: 50px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
  padding-top: 46px;

  .right-side {
    display: flex;
    flex-direction: column;
  }
`;

const Screen = styled.div`
  background: #1b1b1e;
  border-radius: 4px;
  width: 274px;
  height: 158px;
  border: 3px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchNote());
    this.props.dispatch(getCards());
  }

  send() {
    this.props.dispatch(notifSend)({
      message: `Hello, ${this.props.user.name}`,
      kind: 'info',
      dismissAfter: 3000
    });
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <Notifs />
        <div className="dashboard">
          <DashNavigation />

          <h1>You are learning the C Major notes</h1>
          <DashboardContainer>
            <Info>
              <NoteDisplay note={this.props.noteDisplayed} />
              <div className="right-side">
                <Screen>
                  <Feedback />
                  <Points />
                </Screen>
                <NextButton />
              </div>
            </Info>
            <Keyboard />
          </DashboardContainer>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null,
  user: state.auth.user,
  noteDisplayed: state.note.noteDisplayed,
  nextNote: state.note.nextNote
});

export default connect(mapStateToProps)(Dashboard);
