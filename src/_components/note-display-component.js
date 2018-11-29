import React from 'react';

import staff from '../_images/sheet2.png';
import note from '../_images/note.png';
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
      console.log(value);
      playSound(value);
    }
    lastNote = value;
    return notes[value];
  };

  return (
    <NoteDisplayContainer>
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
    </NoteDisplayContainer>
  );
}
