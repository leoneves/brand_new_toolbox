import React, { FunctionComponent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/auth';

import classes from './Login.module.scss';

const Login: FunctionComponent = (): JSX.Element => {
  const usernameLogin = useRef<HTMLInputElement>(null);
  const passwordLogin = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const loginSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredUsername = usernameLogin.current!.value;
    const enteredPassword = passwordLogin.current!.value;
    dispatch(login(enteredUsername, enteredPassword));
  };

  return (
    <div className={classes.login}>
      <div className={classes.login__content}>
        <form onSubmit={loginSubmitHandler}>
          <pre>
            <label htmlFor={'username'}>User: </label>
            <input type={'text'} id={'username'} ref={usernameLogin} />
          </pre>
          <pre>
            <label htmlFor={'username'}>Password: </label>
            <input type={'password'} id={'password'} ref={passwordLogin} />
          </pre>
          <button type={'submit'}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
