import { ActionType, Error, GenericSuccess } from './user/Actions';
import { AxiosResponse } from 'axios';

export const success = (response: AxiosResponse, message: string): GenericSuccess => ({
  type: ActionType.SUCCESS,
  payload: { axiosState: response.status, message: message },
});

export const fail = (message: string): Error => ({
  type: ActionType.ERROR,
  message,
});
