import React, { FunctionComponent, useRef } from 'react';
import { GenericAction } from '../../redux/user/Actions';
import { ThunkDispatch } from 'redux-thunk';
import RootState from '../../redux/RootState';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../redux/user/auth';
import { FormAuthenticationContainer, ErrorMessage, SuccessMessage } from '../Generics/Form.styles';

const ForgotPassword: FunctionComponent = (): JSX.Element => {
  const dispatch: ThunkDispatch<RootState, null, GenericAction> = useDispatch();
  const email = useRef<HTMLInputElement>(null);
  const applicationState = useSelector((state: RootState) => state.application);

  const callForgotPassword: ForgotPasswordThunk = (email: string) => {
    return dispatch(forgotPassword(email));
  };

  const forgotSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    callForgotPassword(email.current!.value).then();
  };

  return (
    <FormAuthenticationContainer height={600} verticalAlign={'middle'}>
      <form onSubmit={forgotSubmitHandler}>
        {applicationState.error ? (
          <ErrorMessage>{applicationState.message}</ErrorMessage>
        ) : (
          <SuccessMessage>{applicationState.message}</SuccessMessage>
        )}
        <pre>
          <label htmlFor={'email'}>Email: </label>
          <input type={'text'} id={'email'} ref={email} />
        </pre>
        <button type={'submit'}>Ok</button>
      </form>
    </FormAuthenticationContainer>
  );
};

type ForgotPasswordThunk = (email: string) => Promise<GenericAction>;

export default ForgotPassword;
