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
import './keyboard-component.css';

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
      <div className="keyboard">
        <div className="accidentals">
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
        </div>

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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  noteDisplayed: state.note.noteDisplayed,
  selectedKey: state.note.selectedKey,
  keyboardDisabled: state.note.keyboardDisabled
});

export default connect(mapStateToProps)(Keyboard);
