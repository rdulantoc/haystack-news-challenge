export const formatDate = (dateIsoString: string) => {
  const date = new Date(dateIsoString);

  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return formattedDate;
};
