import React from 'react';

import staff from '../_images/sheet2.png';
// import note from '../_images/note.png';
import note from '../_images/quarter-note.svg';
import ledger from '../_images/ledger.svg';
import { playSound } from '../utils/sound-player';

import styled from 'styled-components';

const NoteDisplayContainer = styled.div`
  width: 531px;
  height: 211px;
  padding: 0px 25px 0 20px;
  margin: 0px 28px 28px 0;
  background: #f6f6f0;
  border-radius: 6px;
  border: 3px solid #1b1b1e;

  #sheet-img {
    width: 535px;
  }

  #note-img {
    position: relative;
    height: 100px;
    left: 205px;
  }
`;

const StyledNote = styled.img`
  position: relative;
  height: 123px;
  left: 230px;
  z-index: 2;
`;

const Ledger = styled.img`
  position: relative;
  left: 205px;
  z-index: 1;
`;

export default function NoteDisplay(props) {
  // list of note positions
  const notes = {
    A: 186,
    B: 203,
    C: 103,
    D: 120,
    E: 135,
    F: 151,
    G: 168
  };
  let lastNote = '';
  const updateNote = value => {
    if (lastNote !== props.note) {
      console.log(value);
      playSound(value);
    }
    lastNote = value;
    return notes[value];
  };

  const ledgerDisplay =
    props.note === 'C' ? (
      <Ledger src={ledger} alt="ledger" style={{ bottom: 131 }} />
    ) : (
      ''
    );
  return (
    <NoteDisplayContainer>
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
    </NoteDisplayContainer>
  );
}
