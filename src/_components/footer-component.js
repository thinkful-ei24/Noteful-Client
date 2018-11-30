import React from 'react';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #545559;

  p {
    margin: 0;
    padding: 25px;
    text-align: center;
    letter-spacing: 1px;
    color: #0fbf68;

    a {
      color: #0fbf68;
      font-weight: 600;
    }
  }
`;

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

export default function Footer() {
  return (
    <React.Fragment>
      <FooterContainer>
        <p>
          made w/{' '}
          <span role="img" aria-label="unicorn emoji">
            🦄
          </span>{' '}
          &amp; {'  '}
          <span role="img" aria-label="coffee emoji">
            ☕️
          </span>{' '}
          by <a href="https://github.com/kenttoku">Kent</a>,{'  '}
          <a href="https://github.com/clkent">Chelsea</a>, &amp; {'  '}
          <a href="https://github.com/slupton89">Shane</a>
        </p>
      </FooterContainer>
    </React.Fragment>
  );
}
