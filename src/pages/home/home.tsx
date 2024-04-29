import { Random } from 'unsplash-js/dist/methods/photos/types';
import Loading from '../../components/loading/loading';
import Results from '../../components/results/results';
import { useGetRandomPhotos } from '../../hooks/useGetRandomPhotos';

const Home = () => {
  const { data, isLoading } = useGetRandomPhotos();

  return (
    <section>
      <p className="my-4 text-2xl font-bold">Trending Photos Right Now</p>
      {isLoading ? <Loading /> : <Results results={data?.response as Random[]} />}
    </section>
  );
};

export default Home;
