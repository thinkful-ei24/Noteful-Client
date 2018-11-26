import React from 'react';
import { connect } from 'react-redux';
import { fetchNote, updateKeyboard, selectKey } from '../_actions/notes-action';

const NextButton = props => {

  //logic for displaying the next button
  if (props.keyboardDisabled) {
    return  (
      <button
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
      </button>
    );
  }
  return '';
};

const mapStateToProps = state => ({
  keyboardDisabled: state.note.keyboardDisabled
});

export default connect(mapStateToProps)(NextButton);
