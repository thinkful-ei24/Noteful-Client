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

const mobileNotePosition = {
  C: '-10px',
  D: '-1px',
  E: '8px',
  F: '17px',
  G: '26px',
  A: '35px',
  B: '44px'
};

const notePosition = {
  C: '-16px',
  D: '-3px',
  E: '14px',
  F: '31px',
  G: '48px',
  A: '65px',
  B: '82px'
};

const NoteDisplayContainer = styled.div`
  position: relative;
  width: 274px;
  height: 121px;
  padding: 0px 20px 0 20px;
  margin: 20px auto;
  background: #1b1b1e;
  border-radius: 16px;
  border: 3px solid;

  #sheet-img {
    width: 280px;
    margin: 10px auto;
  }

  #note-img {
    position: absolute;
    height: 80px;
    left: 140px;
    bottom: ${props => mobileNotePosition[props.note]};
    z-index: 2;
  }

  #ledger-img {
    position: absolute;
    left: 143px;
    bottom: 6px;
    height: 2px;
    z-index: 1;
  }

  @media (min-width: 885px) {
    width: 531px;
    height: 211px;
    margin: 0px 28px 28px 0;

    #sheet-img {
      width: 531px;
    }

    #note-img {
      position: absolute;
      height: 120px;
      left: 240px;
      bottom: ${props => notePosition[props.note]};
    }

    #ledger-img {
      position: absolute;
      left: 233px;
      bottom: 6px;
      height: 4px;
      z-index: 1;
    }
  }
`;


//-------------------------------------------------
// COMPONENT
// ------------------------------------------------

//FIXME: finish responsive styles and notes positioning on mobile
export default function NoteDisplay(props) {
  // list of note positions
  let lastNote = '';
  const updateNote = value => {
    if (lastNote !== props.note) {
      playSound(value);
    }
    lastNote = value;
  };

  const ledgerDisplay =
    props.note === 'C' ? (
      <img src={ledger} id="ledger-img" alt="ledger"/>
    ) : (
      ''
    );

  updateNote(props.note);
  return (
    <NoteDisplayContainer note={props.note}>
      <img id="sheet-img" src={staff} alt="notation background" />
      <img
        // tada, rubberBand, jello, wobble, slideInDown, rollIn
        // if wrong set to hinge?
        //className="animated tada"
        id="note-img"
        src={note}
        alt="note"
      />
      {ledgerDisplay}
    </NoteDisplayContainer>
  );
}
