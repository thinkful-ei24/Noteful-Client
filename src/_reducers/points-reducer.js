import { INCREMENT_POINTS } from '../_actions/points-action';

const initialState = {
  points: 0,
  loading: false,
  error: null
};

export const pointsReducer = (state = initialState, action) => {
  if (action.type === INCREMENT_POINTS) {
    return Object.assign({}, state, {
      points: action.points
    });
  }
  return state;
};

export default pointsReducer;
