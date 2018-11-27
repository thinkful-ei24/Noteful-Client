import React from 'react';

import staff from '../_images/sheet.png';
import note from '../_images/note.png';
require('./note-display.css');

export default function NoteDisplay(props) {
  // list of note positions
  const notes = {
    a: 367,
    b: 390,
    c: 230,
    d: 270,
    e: 295,
    f: 319,
    g: 345,
    E: 463,
    F: 490,
  }

  const updateNote = (value) => {
    return notes[value];
  }

  return (
    <div className="note-display-container">
      <img id="sheet-img" src={staff} alt="notation background" />
      <img style={{bottom: updateNote(props.note)}} id="note-img" src={note} alt="note" />
    </div>
  );
}