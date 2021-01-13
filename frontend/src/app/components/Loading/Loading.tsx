import { FunctionComponent } from 'react';
import { ContainerLoading } from './Loading.styles';

const Loading: FunctionComponent = (): JSX.Element => {
  return (
    <ContainerLoading>
      <div>
        <h1>Loading…</h1>
      </div>
    </ContainerLoading>
  );
};

export default Loading;
