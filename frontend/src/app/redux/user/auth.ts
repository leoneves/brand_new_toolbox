import UserState from './UserState';
import { ActionType } from './Actions';
import { LoginAction, LoginSuccessAction } from './Actions';
import history from '../../history';

const initialState: UserState = {
  username: '',
  authToken: '',
};

// Actions
export const login = (username: string, password: string): LoginAction => ({
  type: ActionType.LOGIN,
  payload: { user: username, password: password },
});

export const loginSuccess = (payload: { token: string }): LoginSuccessAction => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: payload,
});

const authReducer = (state: UserState = initialState, action: LoginAction): UserState | LoginSuccessAction => {
  switch (action.type) {
    case ActionType.LOGIN:
      history.push('/home');
      return { username: action.payload.user, authToken: action.payload.password };
    default:
      return state;
  }
};

export default authReducer;
