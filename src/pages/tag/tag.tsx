import { useParams } from 'react-router-dom';
import { Random } from 'unsplash-js/dist/methods/photos/types';
import Loading from '../../components/loading/loading';
import Results from '../../components/results/results';
import { useSearchPhotos } from '../../hooks/useSearchPhotos';

const Tag = () => {
  const { title } = useParams();

  const { data, isLoading } = useSearchPhotos({ query: title ?? '' });

  return (
    <section>
      <p className="my-4 text-2xl font-bold">Results</p>
      {isLoading ? <Loading /> : <Results results={data?.response?.results as Random[]} title={title} />}
    </section>
  );
};

export default Tag;
