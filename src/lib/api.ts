import { ColorId, Language, SearchOrderBy, createApi } from 'unsplash-js';
import { Orientation } from 'unsplash-js/dist/types/request';

const client = createApi({ accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY });

export type GetRandomPhotosParams = {
  query?: string;
  username?: string;
  featured?: boolean;
  collectionIds?: string[];
  topicIds?: string[];
  count?: number;
};

export type SearchPhotosParams = {
  query: string;
  page?: number;
  perPage?: number;
  orientation?: Orientation;
  contentFilter?: 'low' | 'high' | undefined;
  color?: ColorId;
  orderBy?: SearchOrderBy;
  collectionIds?: string[];
  lang?: Language;
};

export const getRandomPhotos = async (params: GetRandomPhotosParams = { count: 10 }) => {
  const result = await client.photos.getRandom(params);

  return result;
};

export const searchPhotos = async (params: SearchPhotosParams) => {
  const result = await client.search.getPhotos(params);

  return result;
};
