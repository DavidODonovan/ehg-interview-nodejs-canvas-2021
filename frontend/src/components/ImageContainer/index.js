import { withContext } from 'contexts/ReactDims';
import { ImageWrapper, StyledImage } from './style';
import allTheColours from './allTheColours.png';

const ImageContainer=({ dims })=>{

  // TODO: 3) pass dims down to style and render translations using dims and image size.

  return (
    <ImageWrapper>
      <StyledImage dims={dims}>
        {dims.width && (<img src={allTheColours}/>)}
      </StyledImage>
    </ImageWrapper>
  );
};

export default withContext(ImageContainer);
