import { createApi } from 'unsplash-js';

const client = createApi({ accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY });

export type GetRandomPhotosParams = {
  query?: string;
  username?: string;
  featured?: boolean;
  collectionIds?: string[];
  topicIds?: string[];
  count?: number;
};

export const getRandomPhotos = async (params: GetRandomPhotosParams = { count: 10 }) => {
  const result = await client.photos.getRandom(params);

  return result;
};
