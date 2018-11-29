import React from 'react';
import styled from 'styled-components';

import { playSound } from '../utils/sound-player';

const NoteLabel = styled.p`
  flex: 1;
  align-self: flex-end;
  font-size: 12px;
  text-align: center;
  text-transform: capitalize;
  user-select: none;

  .note-label--accidental {
    color: #f8e8d5;
    margin-bottom: 3px;
  }

  .note-label--natural {
    color: #888;
    margin-bottom: 3px;
  }
`;

const Key = props => {
  let note = props.note;
  return (
    <button
      className={props.class}
      disabled={props.keyboardDisabled}
      onClick={() => {
        playSound(note);
        props.selectedKey(note);
      }}
    >
      <NoteLabel>
        <span>{note}</span>
      </NoteLabel>
    </button>
  );
};

export default Key;
