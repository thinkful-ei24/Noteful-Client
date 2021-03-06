import React from 'react';
import { connect } from 'react-redux';

import DashNavigation from '../_components/dashNavigation-component';
import Points from '../_components/points-component';
import Keyboard from '../_components/keyboard-component';
import Feedback from '../_components/feedback-component';
import NoteDisplay from '../_components/note-display-component';
import NextButton from '../_components/next-button-component';
import Notifications from '../_components/notifications-component';

import { fetchNote } from '../_actions/notes-action';
import { getCards } from '../_actions/card-actions';

import grain from '../_images/grain.png';

//-------------------------------------------------
// STYLES
// ------------------------------------------------
import styled from 'styled-components';

const DashboardContainer = styled.section`
  background-image: url(${grain});
  width: 100vw;
  max-width: 960px;
  position: relative;
  min-height: 590px;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 7px 7px #1b1b1e;
  margin-bottom: 50px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  height: 100%;
  padding-top: 46px;

  .right-side {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 885px) {
    flex-direction: row;
    justify-content: center;

    .right-side {
      display: flex;
      flex-direction: column;
    }
    button {
      max-width: 58px;
    }
  }
`;

const Screen = styled.div`
  background: #1b1b1e;
  border-radius: 6px;
  width: auto;
  margin: 0 20px 20px 20px;
  height: 158px;
  border: 3px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 885px) {
    width: 274px;
    margin: 0;
  }
`;

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

class Dashboard extends React.Component {
  async componentDidMount() {
    await this.props.dispatch(fetchNote());
    await this.props.dispatch(getCards());
    window.NotifComponent.send();
  }

  render() {
    return (
      <React.Fragment>
        <div className="dashboard">
          <DashNavigation />
          <Notifications />

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
