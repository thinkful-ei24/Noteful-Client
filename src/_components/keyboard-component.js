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

//----------------------------------------------
// STYLES
//----------------------------------------------

import styled from 'styled-components';

const KeyboardContainer = styled.div`
  max-width: 840px;
  height: 300px;
  margin: 0 auto;
  border: 3px solid #1b1b1e;
  border-radius: 6px 6px 0 0;

  button {
    cursor: pointer;
  }

  button:focus {
    border: 3px solid #4fb7ec;
    outline: rgba(225, 225, 225, 0);
  }
`;

const AccidentalsContainer = styled.div`
  max-width: 840px;
  display: grid;
  grid-template-columns: repeat(42, 1fr);
  height: 66%;
  justify-items: center;
  margin: 0 auto;

  button {
    max-width: 46px;
    background: #1b1b1e;
    border: 1px solid #fff;
    border-radius: 0 0 4px 4px;
    cursor: pointer;
    top: -299px;
    position: relative;
    z-index: 1;
    border-top: none;
  }

  button.C {
    grid-column: 6 / span 2;
  }

  button.D {
    grid-column: 12 / span 3;
  }

  button.F {
    grid-column: 25 / span 2;
  }

  button.G {
    grid-column: 31 / span 2;
  }

  button.A {
    grid-column: 37 / span 1;
  }

  button:disabled p,
  button p {
    color: #1b1b1e;
  }

  @media (min-width: 545px) {
    button {
      max-width: 58px;
    }
  }
`;

const NaturalsContainer = styled.div`
  max-width: 840px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 300px;
  margin: 0 auto;

  button {
    background: #e8e7df;
    border: 1px solid #1b1b1e;
    border-radius: 0 0 6px 6px;
  }

  button:disabled,
  button:disabled p {
    background: #d4d4d4;
    color: #a09f98;
  }

  p {
    font-size: 1.75em;
    top: 100px;
    position: relative;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.9),
      0 -1px 1px rgba(0, 0, 0, 0.1);
    color: #1b1b1e;
  }
`;

//----------------------------------------------
// COMPONENT
//----------------------------------------------

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
        <NaturalsContainer>
          {keys.map(note => {
            return (
              <Key
                key={note}
                note={note}
                selectedKey={this.handleSelectedKey}
                keyboardDisabled={this.props.keyboardDisabled}
              />
            );
          })}
        </NaturalsContainer>

        <AccidentalsContainer>
          {accidentals.map(note => {
            return (
              <Key
                key={note}
                class={`${note[0]}`}
                note={note}
                selectedKey={this.handleSelectedKey}
                keyboardDisabled={this.props.keyboardDisabled}
              />
            );
          })}
        </AccidentalsContainer>
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
