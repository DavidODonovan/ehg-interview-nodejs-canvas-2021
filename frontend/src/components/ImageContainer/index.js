import { withContext } from 'contexts/ReactDims';
import { StyledImage, Container } from './style';
import allTheColours from './allTheColours.png';

const ImageContainer=(props)=>{
  console.log(props);
  return (
    <Container>
      <StyledImage>
        <img src={allTheColours}/>
      </StyledImage>
    </Container>
  );
};

export default withContext(ImageContainer);
