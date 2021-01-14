import React, { Component, RefObject } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/user/auth';
import { ContainerLogin } from './Login.styles';
import { LoginAction, LoginFailAction } from '../../redux/user/Actions';
import { ThunkDispatch } from 'redux-thunk';
import RootState from '../../redux/RootState';

class Login extends Component<LoginProps, LoginState> {
  usernameLogin: RefObject<HTMLInputElement>;
  passwordLogin: RefObject<HTMLInputElement>;
  state: LoginState = {
    hasError: false,
    errorMessage: '',
  };

  constructor(props: LoginProps) {
    super(props);
    this.usernameLogin = React.createRef<HTMLInputElement>();
    this.passwordLogin = React.createRef<HTMLInputElement>();
  }

  loginSubmitHandler = (event: React.FormEvent): void => {
    event.preventDefault();

    const enteredUsername = this.usernameLogin.current!.value;
    const enteredPassword = this.passwordLogin.current!.value;
    this.props.login(enteredUsername, enteredPassword).catch((response: LoginAction) => {
      const message = (response as LoginFailAction).message;
      this.setState({ hasError: true, errorMessage: message });
    });
  };

  render(): JSX.Element {
    return (
      <ContainerLogin height={600} verticalAlign={'middle'}>
        <form onSubmit={this.loginSubmitHandler}>
          {this.state.hasError && <p>{this.state.errorMessage}</p>}
          <pre>
            <label htmlFor={'username'}>User: </label>
            <input type={'text'} id={'username'} ref={this.usernameLogin} />
          </pre>
          <pre>
            <label htmlFor={'username'}>Password: </label>
            <input type={'password'} id={'password'} ref={this.passwordLogin} />
          </pre>
          <button type={'submit'}>Login</button>
        </form>
      </ContainerLogin>
    );
  }
}

type LoginState = {
  hasError: boolean;
  errorMessage: string;
};

type LoginProps = {
  login: (username: string, password: string) => Promise<LoginAction>;
};

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, null, LoginAction>) => {
  return {
    login: (username: string, password: string) => {
      return dispatch(login(username, password));
    },
  };
};

export default connect<LoginProps>(null, mapDispatchToProps)(Login);
