import {
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILURE
} from '../_actions/notes-action';

const initialState = {
  noteDisplayed: null,
  nextNote: null,
  loading: false,
  error: null
};

export const noteReducer = (state = initialState, action) => {
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
