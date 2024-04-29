import { useQuery } from '@tanstack/react-query';
import { SearchPhotosParams, searchPhotos } from '../lib/api';

export const useSearchPhotos = (params: SearchPhotosParams, enabled: boolean = true) => {
  const query = useQuery({
    queryKey: [`search-${params.query}}`],
    queryFn: () => searchPhotos(params),
    enabled: enabled,
  });

  return query;
};
