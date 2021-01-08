export enum ActionType {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
}

export interface LoginAction {
  type: ActionType.LOGIN;
  payload: { user: string; password: string };
}

export interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: { token: string };
}
