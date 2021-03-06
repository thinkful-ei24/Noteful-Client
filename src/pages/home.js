import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Navigation from '../_components/navigation-component';
import Footer from '../_components/footer-component';

import sheetMusic from '../_images/sheet.png';
import keyboard from '../_images/keyboard.png';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import styled from 'styled-components';

const HomeContainer = styled.div`
  .wrap {
    align-items: flex-start;
    justify-content: center;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 80px;
    max-width: 833px;
  }

  .headline {
    margin: 0 auto;
  }

  .wrap h1 {
    position: relative;
    display: block;
    clear: both;
    margin: 0;
    font-size: 2.5rem;
    line-height: 1;
    transform: translateY(6rem);
    animation: up 500ms linear forwards;
    z-index: 1;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 1);
    text-align: left;
    margin-bottom: 22px;
  }

  .wrap h1:before,
  .wrap h1:after {
    position: absolute;
    content: '';
    width: 0px;
    height: 2px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
  }

  .wrap h1:before {
    top: 1.1rem;
    animation: draw 500ms linear 1s forwards;
  }

  .wrap h1:after {
    bottom: 0.4rem;
    animation: draw 500ms linear 1s forwards;
  }

  .headline {
    font-size: 0;
    position: relative;
    overflow: hidden;
    padding-bottom: 0.4rem;
  }

  @keyframes up {
    100% {
      transform: translateY(0);
    }
  }

  @keyframes draw {
    100% {
      width: 100%;
    }
  }

  .wrap p {
    font-size: 1.5rem;
    font-weight: 200;
    color: #545559;
    text-align: center;
    max-width: 90%;
    margin: 20px auto;
  }

  .btn {
    margin: 20px auto;
    margin-bottom: 100px;
    border: 2px solid #735a02;
    border-radius: 28px;
    background: #f1bb01;
    color: #735a02;
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 30px;
    letter-spacing: 1px;
    text-decoration: none;
  }
  @media (min-width: 573px) {
    .wrap h1 {
      font-size: 4rem;
      margin-bottom: 26px;
      line-height: 0.75;
    }

    .wrap p {
      font-size: 1.75rem;
    }
  }

  @media (min-width: 885px) {
    .wrap h1 {
      font-size: 6rem;
      margin-bottom: 26px;
      line-height: 0.5;
    }

    .wrap p {
      margin-top: 40px;
    }
  }
`;

const MainBody = styled.section`
  background: #1b1b1e;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2,
  div.details {
    max-width: 960px;
    margin: 0 auto;
  }

  h2 {
    color: #fff;
    font-size: 2.2rem;
    text-align: center;
    max-width: 700px;
    margin: 100px 0 80px 0;
    padding: 0 30px;
  }

  div.detail-box {
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    margin-bottom: 60px;

    div.details {
      margin-top: 30px;
    }

    h3 {
      font-size: 1.75rem;
      color: #f1bb01;
      font-weight: 500;
      letter-spacing: 1px;
      margin: 0;
    }

    p {
      color: #fff;
      font-size: 1.4em;
      line-height: 1.35em;
      letter-spacing: 1px;
      margin-top: 15px;
      padding: 0 10px;
    }
  }

  div.detail-box.left {
    flex-direction: column-reverse;
  }

  div.detail-box img {
    object-fit: scale-down;
  }

  @media (min-width: 885px) {
    h2 {
      font-size: 2.75rem;
      margin: 160px auto;
    }

    div.detail-box {
      flex-direction: row;
      max-width: 1100px;
      margin: 0 auto;
      margin-bottom: 240px;

      div.details {
        margin-top: 0px;
      }

      h3 {
        text-align: left;
      }
      p {
        padding: 0;
        text-align: left;
      }
    }

    div.detail-box.left {
      flex-direction: row;
    }
    div.detail-box.right {
      flex-direction: row;
    }

    div.detail-box.left p {
      margin-right: 80px;
    }
    div.detail-box.right p,
    div.detail-box.right h3 {
      margin-left: 80px;
    }

    div.detail-box.left img {
      max-height: 183px;
      margin-top: 25px;
    }

    div.detail-box.right img {
      max-height: 186px;
      margin-top: 10px;
    }
  }
`;

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

const Home = props => {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <HomeContainer>
      <Navigation />
      <div className="wrap">
        <div className="headline">
          <h1>Learn to read music</h1>
          <h1>the easy way.</h1>
        </div>

        <p>
          Using the power of spaced repetition learning you'll find yourself
          reading sheet music in no time – best of all, it's free.
        </p>
        <Link
          aria-label="Learn to read music now button"
          to="/signup"
          className="btn"
        >
          Start Learning Today
        </Link>
      </div>
      <MainBody>
        <h2>Start out simple by learning just the Major C notes</h2>
        <div className="detail-box left">
          <div className="details">
            <h3>One note at a time</h3>
            <p>
              Noteful will present you with a single note to learn at a time.
              We'll keep track of how many you get right and wrong and show you
              the notes again based on a spaced repetition algorithm. This
              repetition helps you learn in no time.
            </p>
          </div>
          <img src={sheetMusic} alt="notes on sheet music" />
        </div>
        <div className="detail-box right">
          <img src={keyboard} alt="piano keys" />
          <div className="details">
            <h3>Learn the piano keys</h3>
            <p>
              As an added bonus, as you play you'll learn the location of each
              note on piano keys and with each key press the note will ring out
              making it that much easier to learn the notes by ear as well.
            </p>
          </div>
        </div>
      </MainBody>
      <Footer />
    </HomeContainer>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export default connect(mapStateToProps)(Home);
