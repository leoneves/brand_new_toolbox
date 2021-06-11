import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { QueryParams } from '../../utils/QueryParams';
import { ErrorMessage, FormAuthenticationContainer, SuccessMessage } from '../Generics/Form.styles';
import { useDispatch, useSelector } from 'react-redux';
import RootState from '../../redux/RootState';
import { GenericAction } from '../../redux/user/Actions';
import { ThunkDispatch } from 'redux-thunk';
import { updatePassword } from '../../redux/user/auth';

const UpdatePassword: FunctionComponent = (): JSX.Element => {
  const location = useLocation();
  const dispatch: ThunkDispatch<RootState, null, GenericAction> = useDispatch();
  const [resetPasswordToken, setResetPasswordToken] = useState<string>();
  const applicationState = useSelector((state: RootState) => state.application);
  const password = useRef<HTMLInputElement>(null);
  const passwordConfirmation = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = parse(location.search) as QueryParams;
    setResetPasswordToken(params.reset_password_token);
  }, []);

  const callUpdatePasswordThunk: UpdatePasswordThunk = (newPassword: string) => {
    return dispatch(updatePassword(newPassword, resetPasswordToken!));
  };

  const forgotSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    callUpdatePasswordThunk(password.current!.value).then();
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
          <label htmlFor={'password'}>New Password: </label>
          <input type={'text'} id={'password'} ref={password} />
        </pre>
        <pre>
          <label htmlFor={'passwordConfirmation'}>Password Confirmation: </label>
          <input type={'text'} id={'passwordConfirmation'} ref={passwordConfirmation} />
        </pre>
        <button type={'submit'}>Ok</button>
      </form>
    </FormAuthenticationContainer>
  );
};

type UpdatePasswordThunk = (newPassword: string) => Promise<GenericAction>;

export default UpdatePassword;
