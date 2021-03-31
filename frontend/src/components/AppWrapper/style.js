import styled from 'styled-components';

export const Layout=styled.div`
  background-color: var(--bg);
  display: grid;
  height: 100vh;
  grid: 50px 1fr 1fr 50px / 50px 1fr 1fr 50px;
`;

export const Container=styled.div`
  grid-area: 2/2/4/4;
`;
