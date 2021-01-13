import React, { FunctionComponent } from 'react';
import Login from './components/Login/Login';

import classes from './App.module.scss';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.app}>
      <Login />
    </div>
  );
};

export default App;
