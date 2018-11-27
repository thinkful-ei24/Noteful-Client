import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '../config';

export const FETCH_CARD_REQUEST = 'FETCH_CARD_REQUEST';
export const fetchCardRequest = () => ({
  type: FETCH_CARD_REQUEST
});

export const FETCH_CARD_SUCCESS = 'FETCH_CARD_SUCCESS';
export const fetchCardSuccess = card => ({
  type: FETCH_CARD_SUCCESS,
  card
});

export const FETCH_CARD_FAILURE = 'FETCH_CARD_FAILURE';
export const fetchCardFailure = () => ({
  type: FETCH_CARD_FAILURE
});


export const getCards = () => dispatch => {
  dispatch(fetchCardRequest());
  const authToken = localStorage.getItem('authToken');
  if(authToken) {
    return fetch(`${API_BASE_URL}/cards`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + authToken,
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
    .then(res => {
      dispatch(fetchCardSuccess(res))
    })
    .catch(err => {
      console.log(err);
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
};
