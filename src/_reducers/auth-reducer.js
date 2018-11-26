import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_AUTH_FAILURE,
  SET_AUTH_TOKEN,
  CLEAR_AUTH_TOKEN
} from '../_actions/auth-action';

const initialState = {
  authToken: null,
  user: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  if (action.type === FETCH_AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
    });
  } else if (action.type === FETCH_AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      user: action.user,
    });
  } else if (action.type === FETCH_AUTH_FAILURE) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error,
    });
  } else if (action.type === SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken,
    });
  } else if (action.type === CLEAR_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: null,
      user: null,
    });
  }
  return state;
};

export default authReducer;