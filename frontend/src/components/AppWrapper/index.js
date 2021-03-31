import { Provider } from 'contexts/ReactDims';
import { Layout, Container } from './style';

const AppWrapper=({children})=>{
  return (
    <Layout>
      <Container>
        <Provider>
          {children}
        </Provider>
      </Container>
    </Layout>
  );
};

export default AppWrapper;
