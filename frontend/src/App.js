import { GlobalNormalizeCSS, GlobalResetCSS, GlobalTypographyCSS, GlobalWebkitScrolling, GlobalColoursCSS } from 'styles/global';
import { StyledImage, Container } from './style';
import colours from './allTheColours.png';
const App=()=>{
  return (
    <>
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
    </>
  );
};

export default App;
