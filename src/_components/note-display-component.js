import React from 'react';

import staff from '../_images/sheet2.png';
import note from '../_images/note.png';
import { playSound } from '../utils/sound-player';
require('./note-display-component.css');

export default function NoteDisplay(props) {
  // list of note positions
  const notes = {
    A: 190,
    B: 208,
    C: 109,
    D: 125,
    E: 140,
    F: 155,
    G: 172
  };
  let lastNote = '';
  const updateNote = value => {
    if (lastNote !== props.note) {
      playSound(value);
    }
    lastNote = value;
    return notes[value];
  };

  console.log(props.note);
  return (
    <div className="note-display-container">
      <img id="sheet-img" src={staff} alt="notation background" />
      <img
        // tada, rubberBand, jello, wobble, slideInDown, rollIn
        // if wrong set to hinge?
        //className="animated tada"
        style={{ bottom: updateNote(props.note) }}
        id="note-img"
        src={note}
        alt="note"
      />
    </div>
  );
}
