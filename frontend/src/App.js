import {
  GlobalNormalizeCSS,
  GlobalResetCSS,
  GlobalTypographyCSS,
  GlobalWebkitScrolling,
  GlobalColoursCSS
} from 'styles/global';

import allTheColours from './allTheColours.png';
import { StyledImage, Container } from './style';
import AppWrapper from 'components/AppWrapper';
import { Provider } from 'contexts/ReactDims';

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
          <img src={allTheColours}/>
        </StyledImage>
      </Container>

    </AppWrapper>
  );
};

export default App;
