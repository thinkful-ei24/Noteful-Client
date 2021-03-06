import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, updateKeyboard, selectKey } from '../_actions/notes-action';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import styled from 'styled-components';

const NextBtn = styled.button`
  height: 43px;
  border: 2px solid #1b1b1e;
  border-radius: 28px;
  background: #f1bb01;
  color: #735a02;
  text-transform: uppercase;
  font-size: 0.75em;
  letter-spacing: 2px;
  padding: 0px 22px;
  font-weight: 600;
  margin: 0 20px 20px 20px;

  :disabled {
    background: transparent;
    border: 2px solid #3d3e40;
    color: #3d3e40;
  }

  :focus {
    outline: #545559;
  }
  @media (min-width: 885px) {
    margin: 10px 0;
    max-width: 100% !important;
  }
`;

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

const NextButton = props => {
  //logic for displaying the next button
  if (props.keyboardDisabled) {
    return (
      <NextBtn
        onClick={() => {
          //fetch the next note
          props.dispatch(fetchNote());
          //set the keyboardDisabled back to false in order to display it again
          props.dispatch(updateKeyboard());
          //reset selectedKey to null after you click next
          props.dispatch(selectKey(null));
        }}
      >
        Next
      </NextBtn>
    );
  }
  return <NextBtn disabled>Next</NextBtn>;
};

const mapStateToProps = state => ({
  keyboardDisabled: state.note.keyboardDisabled
});

export default connect(mapStateToProps)(NextButton);
