import { Provider, withContext } from 'contexts/ReactDims';
import { StyledImage, Container } from './style';
import allTheColours from './allTheColours.png';

const ImageContainer=({ dims })=>{
  console.log(dims)

  // TODO: 1) change AppWrapper to grid and move Container to center
  // TODO: 3) pass dims down to style and render translations using dims and image size.

  return (
      <Container>
        <StyledImage>
          <div>hello</div>
          <div>hello</div>
        </StyledImage>
      </Container>
  );
};

export default withContext(ImageContainer);
