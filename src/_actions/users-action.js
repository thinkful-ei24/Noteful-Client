import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const signUpUser = user => () => {
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      if (err.error.isJoi) {
        const joiMessage = err.error.details[0].message;
        const joiLocation = err.error.details[0].path[0];
        return Promise.reject(
          new SubmissionError({
            [joiLocation]: joiMessage
          })
        );
      }
      //catch for other messages
      const { message, error } = err;
      if (error) {
        return Promise.reject(
          new SubmissionError({
            _error: error
          })
        );
      }
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(
        new SubmissionError({
          username: message
        })
      );
    });
};
