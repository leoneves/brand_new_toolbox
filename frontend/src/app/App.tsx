import React, { FunctionComponent, lazy, Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { History } from 'history';

import { ContainerApp } from './App.styles';
import Loading from './components/Loading/Loading';

const Playground = lazy(() => import('./Playground/Playground'));
const Login = lazy(() => import('./components/Login/Login'));
const Home = lazy(() => import('./containers/Home/Home'));

interface AppProps {
  history: History;
}

const App: FunctionComponent<AppProps> = ({ history }: AppProps): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <ConnectedRouter history={history}>
        <ContainerApp>
          <Switch>
            {process.env.NODE_ENV === 'development' && <Route path="/playground" exact component={Playground} />}
            <Route path="/home" exact component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </ContainerApp>
      </ConnectedRouter>
    </Suspense>
  );
};

export default App;
