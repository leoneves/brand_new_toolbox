import { ThunkAction } from 'redux-thunk';
import UserState from './UserState';
import { ActionType, LoginAction, LoginSuccessAction, LoginFailAction, GenericAction } from './Actions';
import RootState from '../RootState';
import Client from '../../client/client';
import { push } from 'connected-react-router';
import { success, fail } from '../GenericActions';

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

// ThunkActions
export const login = (
  username: string,
  password: string
): ThunkAction<Promise<LoginAction>, RootState, null, LoginAction> => async dispatch => {
  try {
    const response = await Client.getInstance().post<UserResponse>('/login', {
      user: { email: username, password: password },
    });
    const { email, user_name } = response.data;
    const authToken = response.headers['authorization'];
    dispatch(loginSuccess({ email, user_name, authToken }));
    return dispatch(push('/home'));
  } catch (error) {
    return dispatch(loginFail(error.response.data));
  }
};

export const forgotPassword = (
  email: string
): ThunkAction<Promise<GenericAction>, RootState, null, GenericAction> => async dispatch => {
  try {
    const response = await Client.getInstance().post('/password', {
      user: { email: email },
    });
    return dispatch(success(response, response.data.message));
  } catch (error) {
    return dispatch(fail('Error on forgot password'));
  }
};

export const updatePassword = (
  newPasswordValue: string,
  newPasswordToken: string
): ThunkAction<Promise<GenericAction>, RootState, null, GenericAction> => async dispatch => {
  try {
    const response = await Client.getInstance().put('/password', {
      user: {
        reset_password_token: newPasswordToken,
        password: newPasswordValue,
        password_confirmation: newPasswordValue,
      },
    });
    dispatch(success(response, 'Password updated successful'));
    return dispatch(push('/'));
  } catch (error) {
    return dispatch(fail('Error on Update password'));
  }
};

// Actions
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
