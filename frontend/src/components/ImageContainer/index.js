import { withContext } from 'contexts/ReactDims';
import { StyledImage, Container } from './style';
import allTheColours from './allTheColours.png';

const ImageContainer=(props)=>{

  console.log(props.dims);
  // TODO: 1) change AppWrapper to grid and move Container to center 
  //  TODO: 2) conditional render of img when props.dims is present, useEffect.
  // TODO: 3) pass dims down to style and render translations using dims and image size.

  return (
    <Container>
      <StyledImage>
        <img src={allTheColours}/>
      </StyledImage>
    </Container>
  );
};

export default withContext(ImageContainer);
