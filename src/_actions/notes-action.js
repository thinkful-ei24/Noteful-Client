import { API_BASE_URL } from '../config';

export const SELECT_KEY = 'SELECT_KEY';
export const selectKey = selectedKey => ({
  type: SELECT_KEY,
  selectedKey
});

export const UPDATE_KEYBOARD = 'UPDATE_KEYBOARD';
export const updateKeyboard = () => ({
  type: UPDATE_KEYBOARD
});

export const FETCH_NOTE_REQUEST = 'FETCH_NOTE_REQUEST';
export const fetchNoteRequest = () => ({
  type: FETCH_NOTE_REQUEST
});

export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const fetchNoteSuccess = note => ({
  type: FETCH_NOTE_SUCCESS,
  note
});

export const FETCH_NOTE_FAILURE = 'FETCH_NOTE_FAILURE';
export const fetchNoteFailure = () => ({
  type: FETCH_NOTE_FAILURE
});

export const fetchNote = cardId => (dispatch, getState) => {
  dispatch(fetchNoteRequest());
  const authToken = getState().auth.authToken;

  cardId = cardId ? cardId : 'first';

  return fetch(`${API_BASE_URL}/cards/${cardId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(note => dispatch(fetchNoteSuccess(note)))
    .catch(err => dispatch(fetchNoteFailure(err)));
};


export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST';
export const updateNoteRequest = () => ({
  type: UPDATE_NOTE_REQUEST
});

export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const updateNoteSuccess = () => ({
  type: UPDATE_NOTE_SUCCESS
});

export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';
export const updateNoteFailure = () => ({
  type: UPDATE_NOTE_FAILURE
});

export const updateNote = isCorrect => (dispatch, getState) => {
  dispatch(updateNoteRequest());
  const authToken = getState().auth.authToken;
  const card = getState().note.currentNote;
  card.total += 1;

  if (isCorrect) {
    card.memory *= 2;
    card.correct += 1;
  } else {
    card.memory = 1;
  }

  return fetch(`${API_BASE_URL}/cards/${card.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-Type': 'application/json'
    },
    body: JSON.stringify(card)
  })
    .then(res => res.json())
    .then(note => dispatch(updateNoteSuccess(note)))
    .catch(err => dispatch(updateNoteFailure(err)));
};
