import UserState from './user/UserState';
import ApplicationState from './application/ApplicationState';
import { RouterState } from 'connected-react-router';

interface RootState {
  router: RouterState;
  user: UserState;
  application: ApplicationState;
}

export default RootState;
