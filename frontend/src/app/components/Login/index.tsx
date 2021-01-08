import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/auth';

const Login: React.FC = () => {
  const usernameLogin = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const loginSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredUsername = usernameLogin.current!.value;
    dispatch(login(enteredUsername));
  };

  return (
    <form onSubmit={loginSubmitHandler}>
      <div>
        <label htmlFor={'username'}>User</label>
        <input type={'text'} id={'username'} ref={usernameLogin} />
      </div>
      <button type={'submit'}>Login</button>
    </form>
  );
};

export default Login;
