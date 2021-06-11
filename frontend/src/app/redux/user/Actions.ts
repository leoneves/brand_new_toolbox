import { CallHistoryMethodAction } from 'connected-react-router';

export enum ActionType {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SUCCESS,
  ERROR,
}

export interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: { username: string; email: string; authToken: string };
}

export interface LoginFailAction {
  type: ActionType.LOGIN_FAIL;
  message: string;
}

export interface Error {
  type: ActionType.ERROR;
  message: string;
}

export interface GenericSuccess {
  type: ActionType.SUCCESS;
  payload: { axiosState: number; message: string };
}

export type LoginAction = LoginSuccessAction | LoginFailAction | CallHistoryMethodAction;
export type GenericAction = GenericSuccess | Error | CallHistoryMethodAction;
