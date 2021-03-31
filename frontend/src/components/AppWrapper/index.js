import { Provider } from 'contexts/ReactDims';
import { Layout, Container } from './style';

const AppWrapper=({children})=>{
  return (
    <Layout>
      <Provider>
        {children}
      </Provider>
    </Layout>
  );
};

export default AppWrapper;
