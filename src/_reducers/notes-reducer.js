import {
  SELECT_KEY,
  UPDATE_KEYBOARD,
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILURE,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  CLEAR_NOTE,
  CLEAR_KEYBOARD,
  CLEAR_NOTE_DISPLAYED
} from '../_actions/notes-action';

const initialState = {
  selectedKey: null,
  keyboardDisabled: false,
  noteDisplayed: null,
  nextNote: null,
  currentNote: null,
  loading: false,
  error: null
};

export const noteReducer = (state = initialState, action) => {
  if (action.type === SELECT_KEY) {
    return Object.assign({}, state, {
      selectedKey: action.selectedKey
    });
  }
  if (action.type === UPDATE_KEYBOARD) {
    return Object.assign({}, state, {
      keyboardDisabled: !state.keyboardDisabled
    });
  }

  if (action.type === FETCH_NOTE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_NOTE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      noteDisplayed: action.note.note,
      nextNote: action.note.next,
      currentNote: action.note
    });
  } else if (action.type === FETCH_NOTE_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  if (action.type === UPDATE_NOTE_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === UPDATE_NOTE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null
    });
  } else if (action.type === UPDATE_NOTE_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }

  if (action.type === CLEAR_NOTE) {
    return initialState;
  }

  if (action.type === CLEAR_NOTE_DISPLAYED) {
    return Object.assign({}, state, {
      noteDisplayed: null,
    });
  }

  if (action.type === CLEAR_KEYBOARD) {
    return Object.assign({}, state, {
      selectedKey: null,
      keyboardDisabled: false
    });
  }

  return state;
};

export default noteReducer;
