import { withContext } from 'contexts/ReactDims';
import { ImageWrapper, StyledImage } from './style';
import allTheColours from './allTheColours.png';

const ImageContainer=({ dims })=>{
  return (
    <ImageWrapper>
      <StyledImage dims={dims}>
        {dims.width && (<img src={allTheColours} alt="32000 colours"/>)}
      </StyledImage>
    </ImageWrapper>
  );
};

export default withContext(ImageContainer);
