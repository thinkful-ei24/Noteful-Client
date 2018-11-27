import { SELECT_KEY, UPDATE_KEYBOARD } from '../_actions/notes-action';

const initialState = {
  selectedKey: null,
  keyboardDisabled: false,
  noteDisplayed: 'C',
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

  return state;
};

export default noteReducer;
