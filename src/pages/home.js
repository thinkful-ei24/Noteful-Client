import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import Navigation from '../_components/navigation-component';
import Footer from '../_components/footer-component';

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

  .wrap h1 {
    position: relative;
    display: block;
    clear: both;
    margin: 0;
    font-size: 6rem;
    line-height: 0.5;
    transform: translateY(6rem);
    animation: up 500ms linear forwards;
    z-index: 1;
    text-shadow: 0px 1px 1px rgba(255, 255, 255, 1);
    text-align: left;
    margin-bottom: 26px;
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
    font-size: 1.75rem;
    font-weight: 200;
    color: #545559;
    text-align: center;
    max-width: 90%;
    margin: 20px auto;
    margin-top: 40px;
  }

  .btn {
    margin: 20px auto;
    margin-bottom: 80px;
    border: 2px solid #735a02;
    border-radius: 28px;
    background: #f1bb01;
    color: #735a02;
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 25px;
    letter-spacing: 1px;
    text-decoration: none;
  }
`;

const MainBody = styled.section`
  background: #1b1b1e;
  height: 100%;
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
          Using the power of space repetition learning you'll find yourself
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
        <div className="overview">
          <p>copy explaining how it works...</p>
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
