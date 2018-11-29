import React from 'react';
import { connect } from 'react-redux';

import {
  selectKey,
  updateKeyboard,
  updateNote,
  clearKeyboard
} from '../_actions/notes-action';
import {
  incrementPoints,
  decrementPoints,
  clearPoints
} from '../_actions/points-action';

import Key from './key-component';

import styled from 'styled-components';

const AccidentalsContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 750px;
  height: 300px;
  margin: 0 auto;

  .key {
    display: flex;
  }

  .key--accidental.C {
    left: 84px;
  }
  .key--accidental.D {
    left: 191px;
  }
  .key--accidental.F {
    left: 407px;
  }
  .key--accidental.G {
    left: 513px;
  }
  .key--accidental.A {
    left: 619px;
  }
  .key--accidental {
    background: #1b1b1e;
    color: #1b1b1e;
    border: 1px solid #fff;
    border-top: 1px solid transparent;
    border-radius: 0 0 4px 4px;
    cursor: pointer;
    height: 66%;
    z-index: 1;
    position: absolute;
    top: 0;
    width: 46px;
  }
`;

const KeyboardContainer = styled(AccidentalsContainer)`
  border: 4px solid #1b1b1e;
  border-radius: 6px 6px 0px 0px;
  border-bottom: none;

  .key {
    display: flex;
  }

  .key--natural {
    background: #f6f5f3;
    border: 1px solid #888;
    border-radius: 0 0 6px 6px;
    cursor: pointer;
    z-index: 0;
    flex: 1;
    margin-right: 1px;
  }

  .key--natural:last-child {
    margin-right: 0;
  }
`;

class Keyboard extends React.Component {
  componentDidMount() {
    //zero out points
    this.props.dispatch(clearPoints());
    //clear out selected key and set keyboard to active again
    this.props.dispatch(clearKeyboard());
  }
  componentDidUpdate() {
    // selected key is set to null after you navigate away or click next
    //so this will only run when you click on a key
    if (this.props.selectedKey) {
      //increment points if correct
      if (this.props.noteDisplayed === this.props.selectedKey) {
        this.props.dispatch(incrementPoints());
      }
      //decrement points if incorrect
      else {
        this.props.dispatch(decrementPoints());
      }
    }
  }

  handleSelectedKey = note => {
    //sets selectKey state to equal the note clicked
    this.props.dispatch(selectKey(note));

    //sets the keyboard to disabled after you click a note
    this.props.dispatch(updateKeyboard());

    //sending new note to server
    this.props.dispatch(updateNote(this.props.noteDisplayed === note));
  };

  render() {
    let keys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    let accidentals = ['C#/Db', 'D#/Eb', 'F#/Gb', 'G#/Ab', 'A#/Bb'];
    return (
      <KeyboardContainer>
        <AccidentalsContainer>
          {accidentals.map(note => {
            return (
              <Key
                key={note}
                class={`key key--accidental ${note[0]}`}
                note={note}
                selectedKey={this.handleSelectedKey}
                keyboardDisabled={this.props.keyboardDisabled}
              />
            );
          })}
        </AccidentalsContainer>

        {keys.map(note => {
          return (
            <Key
              key={note}
              class={'key key--natural'}
              note={note}
              selectedKey={this.handleSelectedKey}
              keyboardDisabled={this.props.keyboardDisabled}
            />
          );
        })}
      </KeyboardContainer>
    );
  }
}

const mapStateToProps = state => ({
  noteDisplayed: state.note.noteDisplayed,
  selectedKey: state.note.selectedKey,
  keyboardDisabled: state.note.keyboardDisabled
});

export default connect(mapStateToProps)(Keyboard);
