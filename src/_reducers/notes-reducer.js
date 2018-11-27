import {} from '../_actions/auth-action';

const initialState = {
  noteDisplayed: 'c',
  loading: false,
  error: null
};

export const noteReducer = (state = initialState, action) => {
  // if (action.type === FETCH_AUTH_REQUEST) {
  //   return Object.assign({}, state, {
  //     loading: true
  //   });
  // } else if (action.type === FETCH_AUTH_SUCCESS) {
  //   return Object.assign({}, state, {
  //     loading: false,
  //     error: null,
  //     user: action.user
  //   });
  // } else if (action.type === FETCH_AUTH_FAILURE) {
  //   return Object.assign({}, state, {
  //     loading: false,
  //     error: action.error
  //   });
  // } else if (action.type === SET_AUTH_TOKEN) {
  //   return Object.assign({}, state, {
  //     authToken: action.authToken
  //   });
  // } else if (action.type === CLEAR_AUTH_TOKEN) {
  //   return Object.assign({}, state, {
  //     authToken: null,
  //     user: null
  //   });
  // }
  return state;
};

export default noteReducer;
