import { StyledImage } from './style';
import colours from './allTheColours.png';
const App=()=>{
  return (
    <StyledImage>
      <img src={colours}/>
    </StyledImage>
  );
};

export default App;
