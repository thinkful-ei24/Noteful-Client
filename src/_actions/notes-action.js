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
export const fetchNoteSuccess = (note, next) => ({
  type: FETCH_NOTE_SUCCESS,
  note,
  next
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
    .then(note => dispatch(fetchNoteSuccess(note.note, note.next)))
    .catch(err => dispatch(fetchNoteFailure(err)));
};
