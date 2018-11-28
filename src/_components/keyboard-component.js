import React from 'react';
import { connect } from 'react-redux';

import {
  selectKey,
  updateKeyboard,
  updateNote
} from '../_actions/notes-action';

import Key from './key-component';
import './keyboard-component.css';

class Keyboard extends React.Component {
  handleSelectedKey = note => {
    //sets selectKey state to equal the note clicked
    this.props.dispatch(selectKey(note));
    //sets the keyboard to disabled after you click a note
    this.props.dispatch(updateKeyboard());

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
