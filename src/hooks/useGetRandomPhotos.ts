import { useQuery } from '@tanstack/react-query';
import { GetRandomPhotosParams, getRandomPhotos } from '../lib/api';

export const useGetRandomPhotos = (params?: GetRandomPhotosParams, enabled: boolean = true) => {
  const query = useQuery({
    queryKey: ['random'],
    queryFn: () => getRandomPhotos(params),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    enabled: enabled,
  });

  return query;
};
