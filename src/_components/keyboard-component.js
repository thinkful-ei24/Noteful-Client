import React from 'react';

import Key from './key-component';
import './keyboard-component.css';

class Keyboard extends React.Component {
  handleSelectedKey = note => {
    console.log(`the selected key is ${note}`);
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
            />
          );
        })}
      </div>
    );
  }
}

export default Keyboard;
