import React from 'react';

import { playSound } from '../utils/sound-player';

const Key = props => {
  let note = props.note;

  return (
    <button
      className={props.class}
      disabled={props.keyboardDisabled}
      onClick={() => {
        playSound(note);
        props.selectedKey(note);
      }}
    >
      <p>{note}</p>
    </button>
  );
};

export default Key;
