import {
  GlobalNormalizeCSS,
  GlobalResetCSS,
  GlobalTypographyCSS,
  GlobalWebkitScrolling,
  GlobalColoursCSS
} from 'styles/global';

import allTheColours from './allTheColours.png';
import AppWrapper from 'components/AppWrapper';
import ImageContainer from 'components/ImageContainer';

const App=()=>{
  return (
    <AppWrapper>
      <GlobalNormalizeCSS/>
      <GlobalResetCSS/>
      <GlobalTypographyCSS/>
      <GlobalWebkitScrolling/>
      <GlobalColoursCSS/>

      <ImageContainer>
      </ImageContainer>

    </AppWrapper>
  );
};

export default App;
