import styled from 'styled-components';

export const Layout=styled.div`
  background-color: var(--bg);
  display: grid;
  height: 100vh;
  grid: 20% 1fr 1fr 20% / 2fr 1fr 1fr 2fr;
`;

export const Container=styled.div`
  grid-area: 2/2/4/4;
`;
