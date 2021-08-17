import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore, Store } from 'redux';

import { rootReducer } from './reducer';

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}): Store {
  return createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(thunk)));
}
