export const SELECT_KEY = 'SELECT_KEY';
export const selectKey = selectedKey => ({
  type: SELECT_KEY,
  selectedKey
});

export const UPDATE_KEYBOARD = 'UPDATE_KEYBOARD';
export const updateKeyboard = () => ({
  type: UPDATE_KEYBOARD
});
