import { CombinedState, createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import RootState from './RootState';
import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(): Store<CombinedState<RootState>> {
  const middlewares = [routerMiddleware(history), thunk];
  const store: Store<CombinedState<RootState>> = createStore(
    createRootReducer(history),
    compose(applyMiddleware(...middlewares), devToolsEnhancer({}))
  );

  return store;
}
