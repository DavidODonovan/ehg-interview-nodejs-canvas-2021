import { withContext } from 'contexts/ReactDims';
import { StyledImage, Container } from './style';
import allTheColours from './allTheColours.png';

const ImageContainer=(props)=>{
  console.log(props);
  return (
    <div>
      <img src={allTheColours}/>
      helllo
    </div>
  );
};

export default withContext(ImageContainer);
