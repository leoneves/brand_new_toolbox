import UserState from './user/UserState';
import { RouterState } from 'connected-react-router';

interface RootState {
  router: RouterState;
  user: UserState;
}

export default RootState;
