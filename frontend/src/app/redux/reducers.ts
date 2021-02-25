import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import authReducer from './user/auth';
import RootState from './RootState';

const createRootReducer = (history: History): Reducer<RootState> => {
  return combineReducers({
    router: connectRouter(history),
    user: authReducer,
  });
};

export default createRootReducer;
