import {
  FETCH_CARD_REQUEST,
  FETCH_CARD_SUCCESS,
  FETCH_CARD_FAILURE,
  CLEAR_CARD
} from '../_actions/card-actions';

const initialState = {
  loading: false,
  cards: [],
  error: null
};

export const authReducer = (state = initialState, action) => {
  if (action.type === FETCH_CARD_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_CARD_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      cards: action.card
    });
  } else if (action.type === FETCH_CARD_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === CLEAR_CARD) {
    return initialState;
  }
  return state;
};

export default authReducer;
