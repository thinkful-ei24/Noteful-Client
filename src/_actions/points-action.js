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
