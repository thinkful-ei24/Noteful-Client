import React from 'react';
import './keyboard-component.css';
import { playSound } from '../utils/sound-player';


const Key = props => {
  let note = props.note;
  const soundNote = props.note;
  return (
    <button
      className={props.class}
      disabled={props.keyboardDisabled}
      onClick={() => {
        // console.log('playing from key-com', note);
        // playSound(note);
        props.selectedKey(note);
      }}
    >
      <p className="note-label">
        <span>{note}</span>
      </p>
    </button>
  );
};

export default Key;
