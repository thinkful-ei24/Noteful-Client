import React from 'react';

require('./note-display.css');

export default function NoteDisplay() {
  // const sheet = '../_images/sheet.png';
  const staff =
    'https://images.vexels.com/media/users/3/143591/isolated/preview/6f1b93b81d7e9627a88fcec37bff994b-treble-clef-staff-by-vexels.png';
  // const note = '../_images/note.png';
  const note =
    'https://images.vexels.com/media/users/3/143592/isolated/preview/87a7de8e3d9f7b1760a9f5453b72b55c-cuarto-nota-aislado-by-vexels.png';

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

  // call to update position
  const updateNote = noteVal => {
    return noteVal;
  };

  return (
    <div className="note-display-container">
      <img id="sheet-img" src={staff} alt="notation background" />
      <img
        style={{ bottom: updateNote(notes.c) }}
        id="note-img"
        src={note}
        alt="note"
      />
    </div>
  );
}
