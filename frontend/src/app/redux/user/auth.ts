import UserState from './UserState';
import { ActionType, LoginAction, LoginSuccessAction, LoginFailAction } from './Actions';
import { ThunkAction } from 'redux-thunk';
import RootState from '../RootState';
import Client from '../../client/client';
import history from '../../history';

const initialState: UserState = {
  email: '',
  username: '',
  authToken: '',
};

interface UserResponse {
  email: string;
  user_name: string;
  authToken: string;
}

// Actions
export const login = (username: string, password: string): ThunkAction<void, RootState, null, LoginAction> => async dispatch => {
  try {
    const response = await Client.getInstance().post<UserResponse>('/login', {
      user: { email: username, password: password },
    });
    const { email, user_name } = response.data;
    const authToken = response.headers['authorization'];
    dispatch(loginSuccess({ email, user_name, authToken }));
  } catch (error) {
    dispatch(loginFail(error.response.data));
  }
};

export const loginSuccess = (userResponse: UserResponse): LoginSuccessAction => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: { username: userResponse.user_name, email: userResponse.email, authToken: userResponse.authToken },
});

export const loginFail = (message: string): LoginFailAction => ({
  type: ActionType.LOGIN_FAIL,
  message,
});

class LoginError extends Error {
  message: string;
  constructor(message: string) {
    super();
    this.message = message;
  }
}

const authReducer = (state: UserState = initialState, action: LoginAction): UserState => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      history.push('/home');
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
        authToken: action.payload.authToken,
      };
    case ActionType.LOGIN_FAIL:
      throw new LoginError(action.message);
    default:
      return state;
  }
};

export default authReducer;
