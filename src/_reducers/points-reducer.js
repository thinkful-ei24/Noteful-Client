import {
  INCREMENT_POINTS,
  DECREMENT_POINTS,
  CLEAR_POINTS,
  INITIAL_POINTS
} from '../_actions/points-action';

const initialState = {
  points: 0,
  initialPoints: 0,
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
    return initialState;
  }

  if (action.type === INITIAL_POINTS) {
    return Object.assign({}, state, {
      initialPoints: action.initialPoints
    });
  }
  return state;
};

export default pointsReducer;
