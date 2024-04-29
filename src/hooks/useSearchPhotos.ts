import { useQuery } from '@tanstack/react-query';
import { SearchPhotosParams, searchPhotos } from '../lib/api';

export const useSearchPhotos = (params: SearchPhotosParams) => {
  const query = useQuery({ queryKey: [`search-${params.query}}`], queryFn: () => searchPhotos(params) });

  return query;
};
