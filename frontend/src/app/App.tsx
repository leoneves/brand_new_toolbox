import { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Refund from './components/Refund/Refund';
import Home from './containers/Home/Home';
import { ContainerApp } from './App.styles';

const App: FunctionComponent = (): JSX.Element => {
  return (
    <ContainerApp>
      <Switch>
        <Route path="/refund" component={Refund} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </ContainerApp>
  );
};

export default App;
