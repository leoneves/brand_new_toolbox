import { CombinedState, combineReducers, createStore, Store } from 'redux';

import authReducer from './user/auth';
import RootState from './RootState';

const rootReducer = combineReducers({
  user: authReducer,
});

const store: Store<CombinedState<RootState>> = createStore(rootReducer);

export default store;
