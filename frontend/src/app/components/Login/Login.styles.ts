import styled from 'styled-components';

interface ContainerLoginProps {
  height: number;
  verticalAlign: 'top' | 'middle' | 'bottom';
}

export const ContainerLogin = styled.div<ContainerLoginProps>`
  display: table;
  width: 100%;
  height: ${props => props.height}px;

  form {
    display: table-cell;
    vertical-align: ${props => props.verticalAlign};
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;
