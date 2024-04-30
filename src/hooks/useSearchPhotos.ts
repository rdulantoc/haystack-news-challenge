import { useQuery } from '@tanstack/react-query';
import { SearchPhotosParams, searchPhotos } from '../lib/api';

export const useSearchPhotos = (params: SearchPhotosParams, enabled: boolean = true) => {
  const result = useQuery({
    queryKey: [`search-${params.query}}`],
    queryFn: () => searchPhotos(params),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: enabled,
  });

  return result;
};
