import { Outlet } from 'react-router-dom';
import Search from '../components/form/search';
import Layout from '../components/layout/layout';

const Root = () => {
  return (
    <Layout>
      <Search />
      <div>
        <Outlet />
      </div>
    </Layout>
  );
};

export default Root;
