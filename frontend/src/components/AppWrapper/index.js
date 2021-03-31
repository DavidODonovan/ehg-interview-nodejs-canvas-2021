import { Provider } from 'contexts/ReactDims';
import { Layout, Container } from './style';

const AppWrapper=({children})=>{
  return (
        <Layout>
          {children}
        </Layout>
  );
};

export default AppWrapper;
