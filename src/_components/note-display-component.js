import React from 'react';
import styled from 'styled-components';

import staff from '../_images/sheet2.png';
import note from '../_images/note.png';
import ledger from '../_images/ledger.svg';
import { playSound } from '../utils/sound-player';
require('./note-display-component.css');

const StyledNote = styled.img`
  position: relative;
  height: 118px;
  left: 205px;
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
    A: 207,
    B: 225,
    C: 127,
    D: 141,
    E: 155,
    F: 172,
    G: 190
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
        // bottom={updateNote(props.note)}
        id="note-img"
        src={note}
        alt="note"
      />
      {ledgerDisplay}
    </div>
  );
}
