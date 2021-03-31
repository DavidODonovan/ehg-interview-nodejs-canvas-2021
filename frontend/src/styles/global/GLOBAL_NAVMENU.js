import { createGlobalStyle } from 'styled-components';

const NavMenuGlobals = createGlobalStyle`
  :root {

    --bg:  #242526;
    --bg-accent: #484a4d;
    --text-color: #dadce1;
    --nav-size: 60px;
    --border: 1px solid #474a4d;
    --border-radius: 8px;
    --speed: 500ms;

    & a {
      color: var(--text-color);
    };

  };
`;

export default NavMenuGlobals;
