export const serializeSearchParams = <T>(searchParams: URLSearchParams) => {
  return Object.fromEntries(searchParams) as unknown as T;
};
