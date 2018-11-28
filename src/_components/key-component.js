import React from 'react';
import './keyboard-component.css';

const Key = props => {
  let note = props.note;
  return (
    <button
      className={props.class}
      disabled={props.keyboardDisabled}
      onClick={() => props.selectedKey(note)}
    >
      <p className="note-label">
        <span>{note}</span>
      </p>
    </button>
  );
};

export default Key;
