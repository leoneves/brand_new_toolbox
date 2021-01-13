import { FunctionComponent } from 'react';
import RootState from '../../redux/RootState';
import { useSelector } from 'react-redux';

const selectUser = (state: RootState) => state.user;

const Refund: FunctionComponent = (): JSX.Element => {
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Refund {user.username}</p>
    </div>
  );
};

export default Refund;
