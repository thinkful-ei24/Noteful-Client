import jwtDecode from 'jwt-decode';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';
export const clearAuthToken = () => ({
  type: CLEAR_AUTH_TOKEN
});

export const FETCH_AUTH_REQUEST = 'FETCH_AUTH_REQUEST';
export const fetchAuthRequest = () => ({
  type: FETCH_AUTH_REQUEST
});

export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const fetchAuthSuccess = user => ({
  type: FETCH_AUTH_SUCCESS,
  user
});

export const FETCH_AUTH_FAILURE = 'FETCH_AUTH_FAILURE';
export const fetchAuthFailure = () => ({
  type: FETCH_AUTH_FAILURE
});

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(fetchAuthRequest());
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(({ authToken }) => storeAuthToken(authToken, dispatch))
    .catch(err => {
      dispatch(fetchAuthFailure(err));
      dispatch(clearAuthToken(authToken));
      localStorage.clear();
    });
};

//async actions

export const storeAuthToken = (authToken, dispatch) => {
  const decodeToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(fetchAuthSuccess(decodeToken.user));
  localStorage.setItem('authToken', authToken);
};

export const login = values => dispatch => {
  dispatch(fetchAuthRequest());
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
      'content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject({
          code: res.status,
          message: res.statusText
        });
      }
      return res.json();
    })
    .then(({ authToken }) => {
      storeAuthToken(authToken, dispatch);
    })
    .catch(err => {
      if (err.code === 401) {
        return Promise.reject(
          new SubmissionError({
            _err: 'Incorrect username or password'
          })
        );
      } else {
        Promise.reject(
          new SubmissionError({
            [err.location]: err.message
          })
        );
      }
    });
};
