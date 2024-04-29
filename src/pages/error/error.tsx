import { Link, useRouteError } from 'react-router-dom';
import Layout from '../../components/layout/layout';

const Error = () => {
  const { error } = useRouteError() as { error: { message: string } };

  return (
    <Layout>
      <div>
        <h3 className="mb-4 text-3xl">Oops! An error occurred:</h3>
        <p className="mb-4">{error?.message}</p>
        <Link to="/">Take me back home 🚀</Link>
      </div>
    </Layout>
  );
};

export default Error;
