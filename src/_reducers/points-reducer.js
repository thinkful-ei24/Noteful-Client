import {
  INCREMENT_POINTS,
  DECREMENT_POINTS,
  CLEAR_POINTS
} from '../_actions/points-action';

const initialState = {
  points: 0,
  loading: false,
  error: null
};

export const pointsReducer = (state = initialState, action) => {
  if (action.type === INCREMENT_POINTS) {
    return Object.assign({}, state, {
      points: state.points + 1
    });
  }
  if (action.type === DECREMENT_POINTS) {
    return Object.assign({}, state, {
      points: state.points - 1
    });
  }

  if (action.type === CLEAR_POINTS) {
    return Object.assign({}, state, {
      points: 0
    });
  }
  return state;
};

export default pointsReducer;
