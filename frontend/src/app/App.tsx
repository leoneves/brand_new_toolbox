import { FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContainerApp } from './App.styles';
import Loading from './components/Loading/Loading';

const Login = lazy(() => import('./components/Login/Login'));
const Refund = lazy(() => import('./components/Refund/Refund'));
const Home = lazy(() => import('./containers/Home/Home'));

const App: FunctionComponent = (): JSX.Element => {
  return (
    <ContainerApp>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/refund" component={Refund} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </Suspense>
    </ContainerApp>
  );
};

export default App;
