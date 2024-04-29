export const formatAuthorName = (firstName: string, lastName: string | null) => {
  if (!lastName) return firstName;
  return `${firstName} ${(lastName || '')[0]}`;
};
