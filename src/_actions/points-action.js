import { API_BASE_URL } from '../config';

export const INCREMENT_POINTS = 'INCREMENT_POINTS';
export const incrementPoints = points => ({
  type: INCREMENT_POINTS,
  points
});

export const DECREMENT_POINTS = 'DECREMENT_POINTS';
export const decrementPoints = points => ({
  type: DECREMENT_POINTS,
  points
});

export const CLEAR_POINTS = 'CLEAR_POINTS';
export const clearPoints = points => ({
  type: CLEAR_POINTS,
  points
});

export const INITIAL_POINTS = 'INITIAL_POINTS';
export const initialPoints = initialPoints => ({
  type: INITIAL_POINTS,
  initialPoints
});

export const getInitialPoints = () => dispatch => {
  const authToken = localStorage.getItem('authToken');
  if (authToken) {
    return fetch(`${API_BASE_URL}/cards`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken,
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
      .then(cards => {
        let total = 0;
        let correct = 0;
        //tally up total cards answered and correct answers
        cards.forEach(card => {
          total += card.total;
          correct += card.correct;
        });
        // initial points
        let initialPoints = correct - (total - correct);
        return initialPoints;
      })
      .then(points => dispatch(initialPoints(points)));
  }
};
