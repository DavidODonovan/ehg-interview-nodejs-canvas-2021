import { Provider } from 'contexts/ReactDims';
import { Layout, Container } from './style';

const AppWrapper=(props)=>{
  console.log(props)
  return (
    <Layout>
      <Provider>
        {props.children}
      </Provider>
    </Layout>
  );
};

export default AppWrapper;
