import styled from 'styled-components';

export const ContainerLoading = styled.div`
  display: table;
  position: fixed;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  background-color: darkgray;

  div {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-weight: bold;
  }
`;
