import React from 'react';

import staff from '../_images/sheet-b.png';
// import note from '../_images/note.png';
import note from '../_images/quarter-note.svg';
import ledger from '../_images/ledger.svg';
import { playSound } from '../utils/sound-player';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import styled from 'styled-components';

const NoteDisplayContainer = styled.div`
  width: 289px;
  height: 121px;
  padding: 0px 25px 0 20px;
  margin: 20px auto;
  background: #1b1b1e;
  border-radius: 16px;
  border: 3px solid;

  #sheet-img {
    width: 300px;
  }

  #note-img {
    position: relative;
    height: 80px;
    left: 115px;
  }

  @media (min-width: 885px) {
    width: 531px;
    height: 211px;
    margin: 0px 28px 28px 0;

    #sheet-img {
      width: 531px;
    }
    #note-img {
      position: relative;
      height: 110px;
      left: 205px;
    }
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

//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

//FIXME: finish responsive styles and notes positioning on mobile
export default function NoteDisplay(props) {
  // list of note positions
  const notes = {
    A: 192,
    B: 211,
    C: 111,
    D: 125,
    E: 142,
    F: 159,
    G: 176
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
      <Ledger src={ledger} alt="ledger" style={{ bottom: 141 }} />
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
