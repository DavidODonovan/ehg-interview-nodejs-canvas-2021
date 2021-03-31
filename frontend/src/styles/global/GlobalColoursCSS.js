import { createGlobalStyle } from 'styled-components';

const GlobalColours = createGlobalStyle`
  :root {

    // theme chocolate
    --caramelChocolate: hsla(25, 50%, 50%, 1);
    --cherryRipe: hsla(340, 80%, 30%, 1);
    --darkChocolate: hsla(0, 34%, 12%, 1);
    --whiteChocolate: hsla(0, 0%, 90%, 1);


    // theme summer-forest
    --creamClouds: hsla(40, 50%, 85%, 1);
    --brownBark: hsla(20, 20%, 30%, 1);
    --forestGreen: hsla(125, 20%, 50%, 1);
    --hazyBlue: hsla(205, 100%, 75%, 1);
    --purpleHaze: hsla(280, 50%, 53%, 1);
    --silverLeaves: hsla(340, 10%, 50%, 0.7);


  };
`;

export default GlobalColours;
