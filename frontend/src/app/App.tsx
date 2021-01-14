import { FunctionComponent, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContainerApp } from './App.styles';
import Loading from './components/Loading/Loading';

const Login = lazy(() => import('./components/Login/Login'));
const Home = lazy(() => import('./containers/Home/Home'));

const App: FunctionComponent = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <ContainerApp>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={Login} />
        </Switch>
      </ContainerApp>
    </Suspense>
  );
};

export default App;
