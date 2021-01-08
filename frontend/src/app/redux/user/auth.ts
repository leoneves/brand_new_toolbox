import UserState from './UserState';
import { ActionType } from './Actions';
import { LoginAction, LoginSuccessAction } from './Actions';

const initialState: UserState = {
  username: '',
  authToken: '',
};

// Actions
export const login = (username: string): LoginAction => ({
  type: ActionType.LOGIN,
  payload: { user: username, password: 'qwer78' },
});

export const loginSuccess = (payload: { token: string }): LoginSuccessAction => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: payload,
});

const authReducer = (state: UserState = initialState, action: LoginAction): UserState | LoginSuccessAction => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { username: action.payload.user, authToken: action.payload.password };
    default:
      return state;
  }
};

export default authReducer;
