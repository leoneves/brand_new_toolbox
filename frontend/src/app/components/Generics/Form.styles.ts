import styled from 'styled-components';

interface FormAuthenticationContainerProps {
  height: number;
  verticalAlign: 'top' | 'middle' | 'bottom';
}

export const FormAuthenticationContainer = styled.div<FormAuthenticationContainerProps>`
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

export const SuccessMessage = styled.p`
  color: green;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
