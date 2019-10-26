import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer as Reducers } from './reducers';
import promiseMiddleware from 'redux-promise';

const exampleInitialState = {
  user: []
};

export const initializeStore = (initialState = exampleInitialState) => {
  return createStore(
    Reducers,
    initialState,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
  );
};
