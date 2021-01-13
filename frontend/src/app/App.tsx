import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Refund from './components/Refund/Refund';
import Home from './containers/Home/Home';

import classes from './App.module.scss';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/refund" component={Refund} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
