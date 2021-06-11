import ApplicationState from './ApplicationState';
import { ActionType, GenericAction } from '../user/Actions';

const initialState: ApplicationState = {
  message: '',
  error: false,
};

const applicationReducer = (state: ApplicationState = initialState, action: GenericAction): ApplicationState => {
  switch (action.type) {
    case ActionType.SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        error: false,
      };
    case ActionType.ERROR:
      return {
        ...state,
        message: action.message,
        error: true,
      };
    default:
      return state;
  }
};

export default applicationReducer;
