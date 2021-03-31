import { css } from 'styled-components';
/* TODO: use a css mixin at the root to apply to all icons.. */


export default css`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #48484d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;

  & svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }

`;
