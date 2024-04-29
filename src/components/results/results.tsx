import { Random } from 'unsplash-js/dist/methods/photos/types';
import PhotoCard, { Photo } from '../photo-card/photo-card';

type ResultsProps = {
  results?: Random[];
  title?: string;
};

const Results = ({ results = [], title = '' }: ResultsProps) => {
  return results.length > 0 ? (
    <ul className="flex flex-col gap-6">
      {results.map((photo: Photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </ul>
  ) : (
    <p>No photos found {title ? `for ${title}` : null}</p>
  );
};

export default Results;
