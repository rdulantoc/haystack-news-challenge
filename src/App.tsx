import Search from './components/form/search';
import Layout from './components/layout/layout';
import { photo } from './components/photo-card/__tests__/mocks';
import PhotoCard from './components/photo-card/photo-card';

function App() {
  return (
    <Layout>
      <Search />
      <ul>
        <PhotoCard photo={photo} />
      </ul>
    </Layout>
  );
}

export default App;
