import { Helmet } from 'react-helmet-async';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Random } from 'unsplash-js/dist/methods/photos/types';
import Loading from '../../components/loading/loading';
import Results from '../../components/results/results';
import { useGetRandomPhotos } from '../../hooks/useGetRandomPhotos';
import { useSearchPhotos } from '../../hooks/useSearchPhotos';
import { SearchPhotosParams } from '../../lib/api';
import { serializeSearchParams } from '../../lib/utils';

const Home = () => {
  // Intercepts route state
  const { state } = useLocation();
  const [searchParams] = useSearchParams();
  const serializedSearchParams = serializeSearchParams<SearchPhotosParams>(searchParams);

  // If shouldSearch is true, execute the useSearchPhotos query, otherwise, execute useGetRandomPhotos
  const shouldSearch = Boolean(state?.shouldSearch);

  const { data: random, isFetching: isFetchingRandom } = useGetRandomPhotos(undefined, !shouldSearch);
  const { data: search, isFetching: isFetchingSearch } = useSearchPhotos(serializedSearchParams, shouldSearch);

  const results = shouldSearch ? search?.response?.results : random?.response;
  const isFetching = shouldSearch ? isFetchingSearch : isFetchingRandom;

  return (
    <>
      <Helmet>
        <title>{shouldSearch ? `Search ${searchParams.get('query')}` : 'Home'} - PhotoSearch by Unsplashed</title>
      </Helmet>
      <section>
        <p className="my-4 text-2xl font-bold">{shouldSearch ? 'Results' : 'Trending Photos Right Now'}</p>
        {isFetching ? <Loading /> : <Results results={results as Random[]} />}
      </section>
    </>
  );
};

export default Home;
