import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import authReducer from './_reducers/auth-reducer';

import { setAuthToken, refreshAuthToken } from './_actions/auth-action';

//add in Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// Hydrate the authToken from localStorage if it exist
const authToken = localStorage.getItem('authToken');
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
