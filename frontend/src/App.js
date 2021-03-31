import {
  GlobalNormalizeCSS,
  GlobalResetCSS,
  GlobalTypographyCSS,
  GlobalWebkitScrolling,
  GlobalColoursCSS
} from 'styles/global';

import { AppWrapper, StyledImage, Container } from './style';
import colours from './allTheColours.png';
const App=()=>{
  return (
    <AppWrapper>
      <GlobalNormalizeCSS/>
      <GlobalResetCSS/>
      <GlobalTypographyCSS/>
      <GlobalWebkitScrolling/>
      <GlobalColoursCSS/>
      <Container>
        <StyledImage>
          <img src={colours}/>
        </StyledImage>
      </Container>
    </AppWrapper>
  );
};

export default App;
