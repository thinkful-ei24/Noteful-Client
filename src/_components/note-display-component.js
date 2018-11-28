import React from 'react';

import staff from '../_images/sheet.png';
import note from '../_images/note.png';
import { playSound } from '../utils/sound-player';
require('./note-display-component.css');

export default function NoteDisplay(props) {
  // list of note positions
  const notes = {
    A: 367,
    B: 390,
    C: 230,
    D: 270,
    E: 295,
    F: 319,
    G: 345
  };
  let lastNote = '';
  const updateNote = value => {
    if (lastNote !== props.note) {
      playSound(value);
    }
    lastNote = value;
    return notes[value];
  };

  return (
    <div className="note-display-container">
      <img id="sheet-img" src={staff} alt="notation background" />
      <img
        // tada, rubberBand, jello, wobble, slideInDown, rollIn
        // if wrong set to hinge?
        className="animated tada"
        style={{ bottom: updateNote(props.note) }}
        id="note-img"
        src={note}
        alt="note"
      />
    </div>
  );
}
