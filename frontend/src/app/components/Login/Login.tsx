import React, { FunctionComponent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/auth';
import { ContainerLogin } from './Login.styles';

const Login: FunctionComponent = (): JSX.Element => {
  const usernameLogin = useRef<HTMLInputElement>(null);
  const passwordLogin = useRef<HTMLInputElement>(null);
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();

  const loginSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredUsername = usernameLogin.current!.value;
    const enteredPassword = passwordLogin.current!.value;
    dispatch(login(enteredUsername, enteredPassword));
    setHasError(true);
  };

  return (
    <ContainerLogin height={600} verticalAlign={'middle'}>
      <form onSubmit={loginSubmitHandler}>
        {hasError && <p>Logging error!</p>}
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
    </ContainerLogin>
  );
};

export default Login;
