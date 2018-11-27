import React from 'react';
import { connect } from 'react-redux';

import { selectKey, updateKeyboard } from '../_actions/notes-action';

import Key from './key-component';
import './keyboard-component.css';

class Keyboard extends React.Component {
  handleSelectedKey = note => {
    this.props.dispatch(selectKey(note));
    this.props.dispatch(updateKeyboard());
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
  selectedKey: state.selectedKey,
  keyboardDisabled: state.note.keyboardDisabled
});

export default connect(mapStateToProps)(Keyboard);
