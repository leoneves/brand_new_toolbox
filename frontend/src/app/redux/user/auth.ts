import UserState from './UserState';
import { ActionType, LoginFailAction, LoginSuccessAction } from './Actions';
import history from '../../history';
import { ThunkAction } from 'redux-thunk';
import RootState from '../RootState';
import Client from '../../client/client';

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
export const login = (
  username: string,
  password: string
): ThunkAction<void, RootState, null, LoginSuccessAction | LoginFailAction> => async dispatch => {
  try {
    const response = await Client.getInstance().post<UserResponse>('/login', {
      user: { email: username, password: password },
    });
    const { email, user_name } = response.data;
    const authToken = response.headers['authorization'];
    dispatch(loginSuccess({ email, user_name, authToken }));
  } catch (error) {
    dispatch(loginFail());
  }
};

export const loginSuccess = (userResponse: UserResponse): LoginSuccessAction => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: { username: userResponse.user_name, email: userResponse.email, authToken: userResponse.authToken },
});

export const loginFail = (): LoginFailAction => ({
  type: ActionType.LOGIN_FAIL,
});

const authReducer = (state: UserState = initialState, action: LoginSuccessAction | LoginFailAction): UserState => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      history.push('/home');
      return { email: action.payload.email, username: action.payload.username, authToken: action.payload.authToken };
    case ActionType.LOGIN_FAIL:
      return state;
    default:
      return state;
  }
};

export default authReducer;
