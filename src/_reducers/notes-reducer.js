import { SELECT_KEY, UPDATE_KEYBOARD,FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILURE } from '../_actions/notes-action';

const initialState = {
  selectedKey: null,
  keyboardDisabled: false,
  noteDisplayed: null,
  nextNote: null,
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
      noteDisplayed: action.note,
      nextNote: action.next
    });
  } else if (action.type === FETCH_NOTE_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  }
  return state;
};

export default noteReducer;
