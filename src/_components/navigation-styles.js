//-------------------------------------------------
// STYLES
// ------------------------------------------------

import styled from 'styled-components';

const NavigationContainer = styled.nav`
  width: 95vw;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
  padding-top: 10px;

  .logo {
    font-family: filson-pro, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 1.5em;
    text-decoration: none;
    text-transform: uppercase;
    color: #1b1b1e;
    letter-spacing: 4px;
    text-align: left;
    padding: 10px;
  }

  .logo.is-active {
    text-decoration: none;
  }

  a {
    color: #1b1b1e;
    text-decoration: none;
    font-size: 1em;
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 10px;
  }

  a.is-active {
    text-decoration: underline;
  }

  button,
  .button {
    margin: 10px 0;
    border: 2px solid #735a02;
    border-radius: 28px;
    background: #f1bb01;
    color: #735a02;
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 2px;
    font-weight: 600;
    cursor: pointer;
  }

  .button {
    padding: 10px 5px 11px 5px;
    letter-spacing: 3px;
  }

  button {
    height: 43px;
    min-width: 89px;
  }

  button:active,
  button:focus {
    outline: #f6f6f0;
  }

  @media (min-width: 885px) {
    grid-template-columns: 10fr 1fr 1fr;
    padding-top: 20px;

    .logo {
      font-size: 1.85em;
      padding: 20px;
    }

    a {
      font-size: 1em;
      padding: 20px;
    }
  }
`;

export default NavigationContainer;
