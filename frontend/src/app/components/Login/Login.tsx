import React, { FunctionComponent, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/user/auth';
import { FormAuthenticationContainer, ErrorMessage, SuccessMessage } from '../Generics/Form.styles';
import { LoginAction, LoginFailAction } from '../../redux/user/Actions';
import { ThunkDispatch } from 'redux-thunk';
import RootState from '../../redux/RootState';

const Login: FunctionComponent = (): JSX.Element => {
  const usernameLogin = useRef<HTMLInputElement>(null);
  const passwordLogin = useRef<HTMLInputElement>(null);
  const [state, setState] = useState({ hasError: false, errorMessage: '' });
  const applicationState = useSelector((state: RootState) => state.application);
  const dispatch: ThunkDispatch<RootState, null, LoginAction> = useDispatch();

  const callLogin: LoginThunk = (username: string, password: string) => {
    return dispatch(login(username, password));
  };

  const loginSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredUsername = usernameLogin.current!.value;
    const enteredPassword = passwordLogin.current!.value;
    callLogin(enteredUsername, enteredPassword).catch((response: LoginAction) => {
      const message = (response as LoginFailAction).message;
      setState({ hasError: true, errorMessage: message });
    });
  };

  return (
    <FormAuthenticationContainer height={600} verticalAlign={'middle'}>
      <form onSubmit={loginSubmitHandler}>
        {state.hasError && <ErrorMessage>{state.errorMessage}</ErrorMessage>}
        {applicationState.message && <SuccessMessage>{applicationState.message}</SuccessMessage>}
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
    </FormAuthenticationContainer>
  );
};

type LoginThunk = (username: string, password: string) => Promise<LoginAction>;

export default Login;
