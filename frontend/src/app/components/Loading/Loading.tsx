import { FunctionComponent } from 'react';
import { ContainerLoading } from './Loading.styles';

const Loading: FunctionComponent = (): JSX.Element => {
  return (
    <ContainerLoading>
      <div>Loading…</div>
    </ContainerLoading>
  );
};

export default Loading;
