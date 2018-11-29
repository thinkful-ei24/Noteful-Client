import React from 'react';
import styled from 'styled-components';

import staff from '../_images/sheet2.png';
// import note from '../_images/note.png';
import note from '../_images/quarter-note.svg';
import ledger from '../_images/ledger.svg';
import { playSound } from '../utils/sound-player';
require('./note-display-component.css');

const StyledNote = styled.img`
  position: relative;
  height: 123px;
  left: 230px;
  z-index: 2;
`;

const Ledger = styled.img`
  position: relative;
  left: 235px;
  z-index: 1;
`;

export default function NoteDisplay(props) {
  // list of note positions
  const notes = {
    A: 203,
    B: 220,
    C: 120,
    D: 133,
    E: 150,
    F: 168,
    G: 185
  };
  let lastNote = '';
  const updateNote = value => {
    if (lastNote !== props.note) {
      playSound(value);
    }
    lastNote = value;
    return notes[value];
  };

  const ledgerDisplay = props.note === 'C' ? <Ledger src={ledger} alt="ledger"
    style={{ bottom: 150 }} /> : '';
  return (
    <div className="note-display-container">
      <img id="sheet-img" src={staff} alt="notation background" />
      <StyledNote
        // tada, rubberBand, jello, wobble, slideInDown, rollIn
        // if wrong set to hinge?
        //className="animated tada"
        style={{ bottom: updateNote(props.note) }}
        id="note-img"
        src={note}
        alt="note"
      />
      {ledgerDisplay}
    </div>
  );
}
