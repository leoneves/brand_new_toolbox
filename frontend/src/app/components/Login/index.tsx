import React, { useRef } from 'react';

const Login: React.FC = () => {
  const usernameLogin = useRef<HTMLInputElement>(null);

  const loginSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredUsername = usernameLogin.current!.value;
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
