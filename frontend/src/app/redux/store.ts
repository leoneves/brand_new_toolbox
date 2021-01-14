import { CombinedState, combineReducers, createStore, applyMiddleware, compose, Store } from 'redux';
import thunk from 'redux-thunk';
import { devToolsEnhancer } from 'redux-devtools-extension';

import authReducer from './user/auth';
import RootState from './RootState';

const rootReducer = combineReducers({
  user: authReducer,
});

const store: Store<CombinedState<RootState>> = createStore(rootReducer, compose(applyMiddleware(thunk), devToolsEnhancer({})));

export default store;
